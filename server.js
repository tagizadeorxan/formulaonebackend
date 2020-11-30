const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
require('dotenv').config();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  })


// simple route
app.get("/drivers", (req, res) => {
console.log(process.env.DB_HOST)

    let sql = `SELECT * FROM drivers`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
  })
  });
  
  // set port, listen for requests
  app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });