// routes/user.route.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "../../data/24-taller-04-datos.json");
let data = require(dataPath);

// Punto 1 - Usuarios con un hobby específico
router.get("/:hobby/hobby", (req, res) => {
    let hobby = req.params.hobby.toLowerCase(); 
    if (!hobby) {
        return res.status(400).json({ message: "Hobby is required." });
    }
    res.json(data.filter(user => user.hobbies.includes(hobby)));
});

// Punto 2 - Verificar si existe un usuario
router.get("/:id/exists", (req, res) => {
    let id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).json({ message: "id is required." });
    }
    let user = data.find(user => user.codigo == id);
    res.send(user ? "User found." : "User not found.");
});

// Punto 3 - Contar usuarios con un hobby
router.get("/:hobby/hobby/count", (req, res) => {
    let hobby = req.params.hobby.toLowerCase(); 
    if (!hobby) {
        return res.status(400).json({ message: "Hobby is required." });
    }
    const count = data.filter(user => user.hobbies.includes(hobby)).length;
    res.json(count);
});

// Punto 4 - Usuarios con menos de 3 hobbies
router.get("/is-free", (req, res) => {
    res.json(data.filter(user => user.hobbies.length < 3));
});

// Punto 5 - Sugerir hobby a un usuario
router.get("/:id/suggest/:hobby", (req, res) => {
    let id = parseInt(req.params.id);
    let hobby = req.params.hobby.toLowerCase(); 

    if (!id || !hobby) {
        return res.status(400).json({ message: "id and hobby are required." });
    }

    let user = data.find(user => user.codigo == id);

    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    if (user.hobbies.length >= 3) {
        return res.send("Ya tiene muchos hobbies");
    } else {
        user.hobbies.push(hobby);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        return res.send("Hobby añadido");
    }
});

// Punto 6 - Crear un nuevo usuario
router.post("/", (req, res) => {
    const { codigo, nombre, apellido, hobbies } = req.body;

    if (!codigo || !nombre || !apellido || !Array.isArray(hobbies) || hobbies.length < 2) {
        return res.status(400).json({ message: "Usuario no valido" });
    }

    data.push({ codigo, nombre, apellido, hobbies });
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    res.status(201).json({ message: "User registrado", user: { codigo, nombre, apellido, hobbies } });
});

module.exports = router;
