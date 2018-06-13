const express = require('express')
const router = express.Router()

const Company = require('../Data_Access/Company').Company;


router.get('/all', (req, res) => {
    params = req.params
    Company.findAll().then((data) => {
        // console.log(data);
    res.send(JSON.stringify(data))
        
    })
    // res.send(JSON.stringify())
})

// router.post('/addCompany/:name', (req, res) => {

//     params = req.params;

//     word_table.create({ text: params.name }).then((data) => {
//       console.log(data);

//     }, (err) => {
//       console.error(err)
//     })
//     res.send(JSON.stringify(params.name))

//   })


module.exports = router;