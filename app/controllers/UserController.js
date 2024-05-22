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

module.exports = {
  get: async (req, res) => {
    try {
      const [users] = await pool.query("SELECT * FROM t_user");
      res.json(users);
    } catch (error) {
      console.error("UserController Error:", error);
      res.status(500).send("Failed to retrieve users:");
    }
  },
};
