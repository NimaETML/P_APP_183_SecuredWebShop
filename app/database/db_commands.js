const mysql = require('mysql2/promise');
const config = require('./config');

try {
    async function query(sql, params) {
        const connection = mysql.createConnection(config.db);
        const [results, ] = await connection.execute(sql, params);
        return results;
      }
} catch(ex) {
    console.log(ex)
    throw new Error("Error connecting to the database")
}

/// WADDAHELL
const GetAllUsers = (query) => {
    try {
        query("SELECT * FROM users;");
    } catch (ex) {
        console.log(ex)
        throw new Error("Cannot get all the users please try again later")
    }
}

module.exports = { GetAllUsers }