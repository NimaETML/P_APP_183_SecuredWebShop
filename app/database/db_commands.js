const mysql = require("mysql2/promise");
const { pool } = require("./config");
//const { connect } = require('../routes/Users');

/*
try {
    async function query(sql, params) {
        const connection = await mysql.createConnection(config.db);
        const [results] = await connection.execute(sql, params);
        return results;
      }
} catch(ex) {
    console.log(ex)
    throw new Error("Error connecting to the database")
}*/

//const connection = mysql.createConnection(config.db);
/*
try {
  //const connection = mysql.createConnection(config.db);
} catch (ex) {
  console.log(ex);
  throw new Error("Error connecting to the database");
}

function GetAllUsers() {
  try {
    const results = pool.query("SELECT * FROM t_user WHERE 1;");
    return results;
  } catch (ex) {
    console.log(ex);
    throw new Error("Cannot get all the users please try again later");
  }
}

//WADDAHELL

const GetAllUsers = (query) => {
    try {
        query("SELECT * FROM users;");
    } catch (ex) {
        console.log(ex)
        throw new Error("Cannot get all the users please try again later")
    }
}*/

module.exports = { GetAllUsers };
