const express  = require("express");
const cors = require("cors");
const fs = require("fs");
const app  = express();
const port  = 3000;

const data = require("./data/24-taller-04-datos.json"); // cargar datos del archivo data.json
// resuelve CORS
app.use(cors());

app.get("/", (req, res) => {

   res.send('Hola compae')
}
);
//Punto 1
app.get("/users/:hobby/hobby", function (req, res) {

   let hobby = req.params.hobby.toLowerCase(); 
   if (!hobby) {
       return res.status(400).json({ message: "Hobby is required." });
   }
   res.json(data.filter(user => user.hobbies.includes(hobby)));
  
});

//Punto 2
app.get("/users/:id/exists", function (req, res) {
   let id = parseInt(req.params.id);
   if (!id) {
       return res.status(400).json({ message: "id is required." });
   }
   let user = data.find(user => user.codigo == id);
   if (!user){
         return res.send("User not found.");
   }else{
         return res.send("User found.");
   }
});
//punto 3
app.get("/users/:hobby/hobby/count", function (req, res) {

   let hobby = req.params.hobby.toLowerCase(); 
   if (!hobby) {
       return res.status(400).json({ message: "Hobby is required." });
   }
   res.json(data.filter(user => user.hobbies.includes(hobby)).length);
  
});
//punto 4
app.get("/users/is-free", function (req, res) {
  
   res.json(data.filter(user => user.hobbies.length < 3));
  
});
//punto 5
app.get("/users/:id/suggest/:hobby", function (req, res) {

   let id = parseInt(req.params.id);
   let hobby = req.params.hobby.toLowerCase(); 
   if (!id) {
       return res.status(400).json({ message: "id is required." });
   }
   if (!hobby) {
       return res.status(400).json({ message: "Hobby is required." });
   }
   let user = data.find(user => user.codigo == id);

   if(user.hobbies.length >= 3){
         return res.send("Ya tiene muchos hobbies");
   }else{
      user.hobbies.push(hobby);
    
      fs.writeFileSync("./data/24-taller-04-datos.json", JSON.stringify(data, null, 2));

      return res.send("Hobby añadido");
   }
   

});

//punto 6
app.post("/users", function (req, res) {
   // Crear un nuevo usuario
});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
 });
