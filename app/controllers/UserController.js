const pool = require("../database/config");

/*module.exports = {
    get: (req, res) => {
        if (req.query.username) {
            const message = "Voici la liste des utilisateurs récupéré";
            const results = db.GetAllUsers(pool, req.query.username);
            res.json(message, results);
        }
        try {
            const message = "Voici la liste des utilisateurs récupéré";
            const results = db.GetAllUsers(pool);
            res.json(message, results);
        } catch (error) {
            const message = "Erreur lors de la récupération des utilisateurs" + error;
            res.status(500).json({ message });
        }
    }
};*/

///////////// WADDAHELLL LLE LLWA
module.exports = {
  get: (req, res) => {
    try {
      const [users] = pool.query("SELECT * FROM t_user");
      res.json(users);
    } catch (error) {
      console.error("Failed to retrieve users:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};
