const express = require('express');                             // Import du module express

const router = express.Router();
const controller = require("../controllers/UserController");    // Import des données d'utilisateur

//const users = controller.get;

const users = require('../mock/mock_user')

router.get('/', (req, res) => {(
    users.forEach(myFunction))})

  function myFunction(user) {
    (user) => {
        const message = "la liste des produits a bien été récupérée.";
        res.json(message, user);
    }
  }

module.exports = router;                                        // Export du router