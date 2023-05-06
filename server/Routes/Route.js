const express=require('express');
const {
    getData,
    createData,
}=require('../Controller/DataController')

const router=express.Router()

// get all the data
router.get('/',getData)
// create new data
router.post('/',createData)

module.exports = router