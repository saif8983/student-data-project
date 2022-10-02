require('../DB/DBConnection')
const student_data= require('../Model/Shemas')
 const getStudents=(req,res)=>{
    let get_student_data=async()=>{
        try{
          let result1= await student_data.find()
        console.log(result1)
          res.status(200).json(result1)
        }catch(e){
         res.status(400).send(e)
         console.log("error")
        }
      
    }
    get_student_data()
}
const postStudents=async(req,res) => {
    const addStudentData = new student_data(req.body)
    try{
        await addStudentData.save()
        res.status(201).json({
            status: 'Success',
            data : {
                addStudentData
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
  }
  const updateStudents=async (req,res) => {
    const updateStudent = await student_data.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updateStudent
            }
          })
    }catch(err){
        console.log(err)
    }
}
const deleteStudents=async(req,res) => {
    await student_data.findByIdAndDelete(req.params.id)
    
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
}
module.exports= {getStudents,postStudents,updateStudents,deleteStudents}