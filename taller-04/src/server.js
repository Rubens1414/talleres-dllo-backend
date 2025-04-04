const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const userRoutes = require("./routes/user.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
   res.send('Bienvenido al servidor colega/compae/amigazo');
});

app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
