const express = require("express"); // Import du module express

const router = express.Router();
const controller = require("../controllers/UserController"); // Import des données d'utilisateur
const authVer = require("../auth/authVer");

router.get("/", authVer, controller.get);

module.exports = router; // Export du router

/*
router.get('/', (req, res) => {(
  Users.foreach(func))})

  function func(user) {
    (user) => {
        const message = "la liste des utilisateurs a bien été récupérée.";
        res.json(message, user);
    }
};

userRouter.get('/', async (req, res) => {
    if (req.query.username) {
        const message = "Voici la liste des utilisateurs récupéré";
        const results = await getAllUserLike(connection, req.query.username);
        res.json(success(message, results));
    }
    const message = "Voici la liste des utilisateurs récupéré";
    try {
        const results = await getAllUser(connection);
        res.json(success(message, results));
    } catch (error) {
        const message = "Erreur lors de la récupération des utilisateurs" + error;
        res.status(500).json({ message });
    }
});
  }*/
