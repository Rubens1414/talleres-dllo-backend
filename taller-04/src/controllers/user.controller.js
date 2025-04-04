const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../../data/24-taller-04-datos.json");
let data = require(dataPath);

const getUsersByHobby = (req, res) => {
  const hobby = req.params.hobby?.toLowerCase();
  if (!hobby) return res.status(400).json({ message: "Hobby is required." });

  const result = data.filter(user => user.hobbies.includes(hobby));
  res.json(result);
};

const checkUserExists = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ message: "ID is required." });

  const exists = data.find(user => user.codigo == id);
  res.send(exists ? "User found." : "User not found.");
};

const countUsersByHobby = (req, res) => {
  const hobby = req.params.hobby?.toLowerCase();
  if (!hobby) return res.status(400).json({ message: "Hobby is required." });

  const count = data.filter(user => user.hobbies.includes(hobby)).length;
  res.json(count);
};

const getUsersWithLessThanThreeHobbies = (req, res) => {
  const result = data.filter(user => user.hobbies.length < 3);
  res.json(result);
};

const suggestHobby = (req, res) => {
  const id = parseInt(req.params.id);
  const hobby = req.params.hobby?.toLowerCase();
  if (!id || !hobby) return res.status(400).json({ message: "ID and hobby are required." });

  const user = data.find(user => user.codigo == id);
  if (!user) return res.status(404).json({ message: "User not found." });

  if (user.hobbies.length >= 3) {
    return res.send("Ya tiene muchos hobbies");
  }

  user.hobbies.push(hobby);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.send("Hobby añadido");
};

const createUser = (req, res) => {
  const { codigo, nombre, apellido, hobbies } = req.body;
  if (!codigo || !nombre || !apellido || !Array.isArray(hobbies) || hobbies.length < 2) {
    return res.status(400).json({ message: "Usuario no válido" });
  }

  data.push({ codigo, nombre, apellido, hobbies });
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.status(201).json({ message: "User registrado", user: { codigo, nombre, apellido, hobbies } });
};

module.exports = {
  getUsersByHobby,
  checkUserExists,
  countUsersByHobby,
  getUsersWithLessThanThreeHobbies,
  suggestHobby,
  createUser
};
