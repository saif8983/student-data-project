import { Stack } from '@mui/system';
import { Typography ,Box,Button} from '@mui/material';
import { InputLabel ,MenuItem,FormControl,Select,TextField} from '@mui/material';
import { FORMAT_DATE } from '../Utils/Time';
import React from 'react';
import style from '../Utils/style';
import { arrayOfClass,arrayOfDivision } from '../Utils/valuesOfSelet';
import { useEffect } from 'react';
import { addStudentsData } from '../api/student';
import FilBase from 'react-file-base64'
const AddStudents = () => {
      const [data,setData] = React.useState({
    firstName:"",
    middleName:"",
    lastName:"",
    class:"",
    division:"",
    rollNumber:"",
    addressLineOne:"",
    addressLineSecond:"",
    landmark:"",
    city:"",
    pincode:'',
    image:''
  })
    console.log(data.image)
    const handleChange = (event,name) => {
      setData({...data,[name]:event})
      };
      const handleAddStudent=()=>{
      setData({
        firstName:"",
        middleName:"",
        lastName:"",
        class:"",
        division:"",
        rollNumber:"",
        addressLineOne:"",
        addressLineSecond:"",
        landmark:"",
        city:"",
        pincode:'',
        image:''
      })
      addStudentsData(data)
      }
     
    return (
        <>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={6}>
                <Typography style={style.StudentsTitleCss}>AddStudents</Typography>
                <time style={style.Timecss}>{FORMAT_DATE}</time>
            </Stack>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={style.FlexOfrow}>
        <TextField
          label="First Name"
          style={style.TaxfieldSmallCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.firstName}
          name='firstName'
        />
       <TextField
          label="Middle Name"
          style={style.TaxfieldSmallCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.middleName}
          name='middleName'
        />
        <TextField
          label="Last Name"
          style={style.TaxfieldSmallCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.lastName}
          name='lastName'
        />
      </div> 
      <div style={style.FlexOfrow}>
      <FormControl sx={style.FormControlCss}>
        <InputLabel id="demo-simple-select-helper-label">Select Class</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={data.class}
          label="Select Class"
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          name='class'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {arrayOfClass.map((item,i)=>
            <MenuItem key={i}  value={item}>{item}</MenuItem>
          )}  
        </Select>
      </FormControl>
      <FormControl sx={style.FormControlCss}>
        <InputLabel id="demo-simple-select-helper-label">Select Division</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={data.division}
          label="Select Division"
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          name='division'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {arrayOfDivision.map((item,i)=>
            <MenuItem key={i}  value={item}>{item}</MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
          label="Enter Roll Number in Digits"
          style={style.TaxfieldSmallCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.rollNumber}
          name='rollNumber'
        />
      </div>
      <div style={style.FlexOfrowLargTaxField}>
      <TextField
          label="Address Line 1"
          style={style.TaxfieldLargeCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.addressLineOne}
          name='addressLineOne'
        />
        <TextField
          label="Address Line 2"
          style={style.TaxfieldLargeCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.addressLineSecond}
          name='addressLineSecond'
        />
      </div>
      <div style={style.FlexOfrow}>
      <TextField
          label="Landmark"
          style={style.TaxfieldSmallCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.landmark}
          name='landmark'
        />
         <TextField
          label="City"
          style={style.TaxfieldSmallCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.city}
          name='city'
        />
         <TextField
          label="Pincode"
          style={style.TaxfieldSmallCss}
          onChange={(e)=>handleChange(e.target.value,e.target.name)}
          value={data.pincode}
          name='pincode'
        />
        <FilBase
          type="file"
         multiple={false}
         onDone={({ base64 }) => handleChange(base64,'image')}
        />

       
      </div>
      <div>
<Button variant="contained" onClick={()=>handleAddStudent()} style={style.AddStudentButtonCss}> Add Student</Button>
      </div>
    </Box>          
        </>
    );
}

export default AddStudents;
