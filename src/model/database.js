const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sql_injection",
  multipleStatements: true,
});

database.connect((err) => {
  if (err) throw err.stack;
  else console.log("Connect success");
});

module.exports = {
  query: function (sql, callback) {
    database.query(sql, (err, results) => {
      if (err) callback(err);
      else callback(err, results);
    });
  },
};
