const express = require('express');
const db = require('../db')
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


// Get all shipments/orders from DB
router.get('/all', (req, res) => {
    const query = "SELECT * FROM `Order`"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


// TODO Save order to DB, define logic to check for forbidden combinations
router.post('/save', jsonParser, (req, res) => {
    var data = req.body.orderData;
    console.log(data);
    res.send(data)
})

module.exports = router;