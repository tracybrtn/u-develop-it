const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Ult1mat3$hit',
    database: 'election'
  });

  module.exports = db;