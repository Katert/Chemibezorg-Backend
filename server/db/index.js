// Create DB connection
const mysql = require('mysql');
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database : 'Chemibezorg'
});

// Connect to DB
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Connected to MySQL DB.')
})

module.exports = db;