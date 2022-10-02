const express= require('express')
const router=  express.Router()
const { default: mongoose } = require('mongoose')
const {getStudents,postStudents,updateStudents,deleteStudents} = require("../Controller/controllers")
router.get("/student",getStudents)
router.post('/add-student',postStudents )
router.patch('/update-student/:id',updateStudents )
router.delete('/delete-student/:id',deleteStudents )
module.exports=router;