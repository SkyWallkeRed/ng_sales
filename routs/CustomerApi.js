const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize');
const Customer = require('../Data_Access/Customer').Customer;



router.get('/all', (req, res) => {
    params = req.params
    Customer.findAll().then((data) => {
        // console.log(data);
    res.send(JSON.stringify(data))
        
    })
    // res.send(JSON.stringify())
})


module.exports = router