const express = require("express");
//const fs = require("node:fs")
//const https = require("node:https")

const app = express();

//const options = { key: fs.readFileSync("cert/server.key"), cert: fs.readFileSync("cert/server.cert") };
 
//https.createServer(options, app).listen(443)

// message affiché par défaut
app.get("/", (req, res) => {
    res.send("API REST of self service machine !");
  });


// Routes pour afficher tout les utilisateurs
const usersRoute = require('./routes/Users');
app.use('/users', usersRoute);

// Démarrage du serveur
app.listen(8085, () => { // pas 8080 car docker l'utilise déjà
  console.log('Server running on port 8085');
});