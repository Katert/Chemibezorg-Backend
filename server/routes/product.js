const express = require('express');
const db = require('../db')

const router = express.Router();


// Get all products from DB
router.get('/all', (req, res) => {
    const query = "SELECT * FROM Product"
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})

module.exports = router;