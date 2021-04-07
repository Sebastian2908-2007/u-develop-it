const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        // your mysql password
        password: 'Byanymeans333811#',
        database: 'election'

    },
    console.log('Connected to the election database')
);

module.exports = db;