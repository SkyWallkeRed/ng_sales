const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize');
const Customer = require('../Data_Access/Customer');



router.get('/all', (req, res) => {
    params = req.params
    Customer.getAll().then((data) => {
        res.send(JSON.stringify(data))

    }, err => { console.error(err) })
})


router.post('', (req, res) => {
    // debugger
    params = req.body
    // console.log(params)
    Customer.newOne(params).then((data) => {
        res.send(JSON.stringify(data))

    }, err => { console.error(err) })
})

router.delete('/:id', (req, res) => {
    params = req.params.id
    // console.log(params);
    Customer.delete(params).then((data) => {
        res.send(JSON.stringify(data))
    })

});

router.put('/:id', (req, res) => {
    obj = req.body
    id = req.params.id

    Customer.edit(id, obj).then((res) => {

    });


}), err => { console.error(err) };



module.exports = router