const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "root",
      database: "placeholder_database",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;