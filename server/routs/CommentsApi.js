const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize');
const Comments = require('../Data_Access/Comments');

router.get('/all', (req, res) => {
    params = req.params
    Comments.getAll().then((data) => {
        res.send(JSON.stringify(data))

    }, err => { console.error(err) })
})



















module.exports = router