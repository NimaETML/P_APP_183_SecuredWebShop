const pool = require("../database/config");
const crypto = require("crypto");
const saltRounds = 10;
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

module.exports.userGet = {
  get: async (req, res) => {
    try {
      const [users] = await pool.query("SELECT * FROM t_user");
      res.json({ data: users });
    } catch (error) {
      console.error("UserController Error:", error);
      res.status(500).send("Failed to retrieve users:");
    }
  },
};

module.exports.userPost = {
  post: async (req, res) => {
    try {
      const useName = req.body.useName;
      const usePassword = req.body.usePassword;
      const [users] = await pool.query(
        `INSERT INTO "t_user" ("useId", ${useName}, "usePassword", "isAdmin") VALUES ("1", "Nima", "mdptopsecret", "0")`
      );
      res.json({ data: users });
    } catch (error) {
      console.error("UserController Error:", error);
      res.status(500).send("Failed to retrieve users:");
    }
  },
};

////////////////////// HASHING FINI????????????????????
/*
hashpassword = (password) => {
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      console.log("Salt: ", salt);
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      console.log("Hash: ", hash);
    })
    .catch((err) => console.error(err.message));

  return hash;
}; */
