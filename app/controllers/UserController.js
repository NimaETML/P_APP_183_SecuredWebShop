const db =  require("../database/db_commands");

module.exports = {
    get: async (req, res) => {
        if (req.query.username) {
            const message = "Voici la liste des utilisateurs récupéré";
            const results = await db.GetAllUsers(db.connection, req.query.username);
            res.json(message, results);
        }
        const message = "Voici la liste des utilisateurs récupéré";
        try {
            const results = await db.GetAllUsers(db.connection);
            res.json(message, results);
        } catch (error) {
            const message = "Erreur lors de la récupération des utilisateurs" + error;
            res.status(500).json({ message });
        }
    }
};