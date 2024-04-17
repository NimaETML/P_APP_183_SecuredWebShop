const express = require("express");

const app = express();


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