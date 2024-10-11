const express=require('express')
const router=express.Router()
const movie= require('../controllers/movieController')

router.get('/search',movie)

module.exports=router