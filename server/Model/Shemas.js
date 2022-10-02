const { default: mongoose } = require('mongoose')

require('../DB/DBConnection')
const studentsShema= new mongoose.Schema({
    firstName:{
        type:String ,
        require:true
    },
    middleName:{
        type:String
       
    },
    lastName:
    {
     type:String
     
    },
    class:
    {
        type:String
    },
    division:
    {
        type:String
    },
    rollNumber:
    {
        type:String
    },
    addressLineOne:{
        type:String
    },
    addressLineSecond:
    {
        type:String
    },
    landmark:
    {
        type:String
    },
    city:
    {
        type:String
    },
    pincode:
    {
        type:Number,
        
    },
    image:{
        type:String
    }
    
})
const studentData= mongoose.model('datas',studentsShema)
module.exports = studentData