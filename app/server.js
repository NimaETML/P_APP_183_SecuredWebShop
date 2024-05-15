const express = require("express");
const fs = require("fs")
const https = require("https")
const app = express();


// message affiché par défaut
app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

// Routes pour afficher tout les utilisateurs
const usersRoute = require('./routes/Users');
app.use('/users', usersRoute);


const options = { key: fs.readFileSync("cert/server.key"), cert: fs.readFileSync("cert/server.cert") };
 
// Démarrage du serveur
https.createServer(options, app).listen(443)



// ORDRE EST TRES IMPORTANT
