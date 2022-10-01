import React from 'react';
import { Stack } from '@mui/system';
import { useEffect } from 'react';import React from "react";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import {
  allStudentsData,
  updateStudentsData,
  deleteStudentsData,
} from "../api/student";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Box, Modal, Button } from "@mui/material";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { arrayOfClass, arrayOfDivision } from "../Utils/valuesOfSelet";
import { FORMAT_DATE } from "../Utils/Time";
import style from "../Utils/style";
const arrayOfHeading = [
  "Name",
  "Class",
  "Roll No.",
  "Image",
  "View / Edit / Delete",
];
{
  /* That is managestudents component */
}
const ManageStudents = () => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [studentData, setStudentData] = React.useState([]);
  const [updateStudent, setUpdateStudent] = React.useState("");
  const [deleteStudent, setDeletStudent] = React.useState("");
  const [label, setLable] = React.useState(true);
  const [readOnly, setReadOnly] = React.useState("");
  const [buttonUpdate, setButtonUpdate] = React.useState(true);
  {
    /* That is for edit data and open the modal */
  }
  const handleopenEdit = (dataOfStudent) => {
    setOpenEdit(true);
    setUpdateStudent(dataOfStudent);
    setButtonUpdate(true);
    setReadOnly({ readOnly: false });
  };
  {
    /* That is close for modal of edit or update form */
  }
  const handleCloseEdit = () => setOpenEdit(false);
  {
    /* That is for delete table data and open the modal of delte */
  }
  const handleopenDelete = (id) => {
    setOpenDelete(true);
    setDeletStudent(id);
  };
  {
    /* That is action of delete button close modal of delete */
  }
  const handleCloseDelete = () => {
    setOpenDelete(false);
    deleteStudentsData(deleteStudent);
  };
  {
    /* That is close the cancel the delet modal */
  }
  const handleCancel = () => {
    setOpenDelete(false);
  };
  {
    /* That is update data in object form */
  }
  const handleChange = (event, name) => {
    setUpdateStudent({ ...updateStudent, [name]: event });
  };
  {
    /* That update data  and close update modal */
  }
  const handleUpdateStudent = (id) => {
    updateStudentsData(id, updateStudent);
    setOpenEdit(false);
  };
  const handleTextfieldClick = () => {
    setUpdateStudent("");
    setLable(false);
  };
  const handleView = (dataOfStudent) => {
    setOpenEdit(true);
    setReadOnly({ readOnly: true });
    setUpdateStudent(dataOfStudent);
    setButtonUpdate(false);
  };
  useEffect(() => {
    allStudentsData().then((res) => {
      setStudentData(res.data);
    });
  }, [openEdit, openDelete]);
  return (
    <>
      {/* That is table */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={6}
      >
        <Typography style={style.StudentsTitleCss}>Manage Students</Typography>
        <time style={style.Timecss}>{FORMAT_DATE}</time>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead style={style.TableHeadingCss}>
            <TableRow style={style.flexOfrowSpaceBetween}>
              {arrayOfHeading.map((heading, index) => (
                <TableCell key={index} style={style.TableHeadCellCss}>
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={style.flexOfrowSpaceBetween}
              >
                <TableCell align="left" style={style.TabelRowCellCss}>
                  {row.firstName + " " + row.middleName + " " + row.lastName}
                </TableCell>
                <TableCell align="left" style={style.TabelRowCellCss}>
                  {row.class}
                </TableCell>
                <TableCell align="left" style={style.TabelRowCellCss}>
                  {row.rollNumber}
                </TableCell>
                <TableCell align="left" style={{ width: "20%", height: "25%" }}>
                  <img style={style.TableImgCss} src={row.image} />
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: "#F33823", width: "20%" }}
                >
                  <VisibilityOutlinedIcon
                    onClick={() => handleView(row)}
                    sx={style.TableIconsCss}
                  />
                  <BorderColorOutlinedIcon
                    onClick={() => handleopenEdit(row)}
                    sx={style.TableIconsCss}
                  />
                  <DeleteForeverOutlinedIcon
                    onClick={() => handleopenDelete(row._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {/* That is edit modal */}
        <Modal
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style.ModalBox}
            component="form"
            noValidate
            autoComplete="off"
          >
            <div style={style.FlexOfrow}>
              <TextField
                label={label ? "First Name" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                onClick={() => handleTextfieldClick()}
                value={updateStudent.firstName}
                name="firstName"
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Middle Name" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.middleName}
                name="middleName"
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Last Name" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.lastName}
                name="lastName"
                inputProps={readOnly}
              />
            </div>
            <div style={style.FlexOfrow}>
              <FormControl sx={style.FormControlCss}>
                <InputLabel id="demo-simple-select-helper-label">
                  Select Class
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={updateStudent.class}
                  label="Select Class"
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                  name="class"
                  inputProps={readOnly}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {arrayOfClass.map((item, i) => (
                    <MenuItem key={i} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={style.FormControlCss}>
                <InputLabel id="demo-simple-select-helper-label">
                  Select Division
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={updateStudent.division}
                  label="Select Division"
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                  name="division"
                  inputProps={readOnly}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {arrayOfDivision.map((item, i) => (
                    <MenuItem key={i} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label={label ? "Enter Roll Number in Digits" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.rollNumber}
                name="rollNumber"
                inputProps={readOnly}
              />
            </div>
            <div style={style.FlexOfrowLargTaxField}>
              <TextField
                label={label ? "Address Line 1" : ""}
                style={style.TaxfieldLargeCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.addressLineOne}
                name="addressLineOne"
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Address Line 2" : ""}
                style={style.TaxfieldLargeCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.addressLineSecond}
                name="addressLineSecond"
                inputProps={readOnly}
              />
            </div>
            <div style={style.FlexOfrow}>
              <TextField
                label={label ? "Landmark" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.landmark}
                name="landmark"
                inputProps={readOnly}
              />
              <TextField
                label={label ? "City" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.city}
                name="city"
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Pincode" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.pincode}
                name="pincode"
                inputProps={readOnly}
              />
            </div>
            <div>
              {buttonUpdate ? (
                <Button
                  variant="contained"
                  onClick={() => handleUpdateStudent(updateStudent._id)}
                  style={style.AddStudentButtonCss}
                >
                  {" "}
                  update
                </Button>
              ) : (
                ""
              )}
            </div>
          </Box>
        </Modal>
      </div>
      <div>
        {/* Delete modal */}
        <Modal
          open={openDelete}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.ModalBox}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this item
            </Typography>
            <div style={style.FlexofrowModa}>
              <Button
                variant="contained"
                onClick={handleCloseDelete}
                color="warning"
              >
                Delete
              </Button>
              <Button variant="contained" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ManageStudents;

import { allStudentsData } from '../api/student';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Box, Modal, Button } from '@mui/material'
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { arrayOfClass } from '../Utils/valuesOfSelet';
import { arrayOfDivision } from '../Utils/valuesOfSelet';
import { FORMAT_DATE } from '../Utils/Time';
import style from '../Utils/style';
import { updateStudentsData, deleteStudentsData } from '../api/student';
const arrayOfHeading = ['Name', 'Class', 'Roll No.', , 'Image', 'View / Edit / Delete']
const ManageStudents = () => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [studentData, setStudentData] = React.useState([])
  const [age, setAge] = React.useState('');
  const [updateStudent, setUpdateStudent] = React.useState('')
  const [deleteStudent, setDeletStudent] = React.useState('')
  const [label, setLable] = React.useState(true)
  const [readOnly, setReadOnly] = React.useState('')
  const [buttonUpdate, setButtonUpdate] = React.useState(true)
  const handleopenEdit = (dataOfStudent) => {
    setOpenEdit(true);
    setUpdateStudent(dataOfStudent)
    setButtonUpdate(true)
    setReadOnly({ readOnly: false })
  }
  const handleCloseEdit = () => setOpenEdit(false);
  const handleopenDelete = (id) => {
    setOpenDelete(true);
    setDeletStudent(id)

  }
  const handleCloseDelete = () => {
    setOpenDelete(false);
    deleteStudentsData(deleteStudent)

  }
  const handleCancel = () => {
    setOpenDelete(false);

  }
  const handleChange = (event, name) => {
    setUpdateStudent({ ...updateStudent, [name]: event })
  };
  const handleUpdateStudent = (id) => {
    updateStudentsData(id, updateStudent)
    setOpenEdit(false)
  }
  const handleTextfieldClick = () => {
    setUpdateStudent('')
    setLable(false)
  }
  const handleView = (dataOfStudent) => {
    setOpenEdit(true)
    setReadOnly({ readOnly: true })
    setUpdateStudent(dataOfStudent)
    setButtonUpdate(false)
  }
  useEffect(() => {
    allStudentsData().then(res => {
      setStudentData(res.data)
    })
  }, [openEdit, openDelete])
  return (
    <>
      <Stack direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={6}>
        <Typography style={style.StudentsTitleCss}>Manage Students</Typography>
        <time style={style.Timecss}>{FORMAT_DATE}</time>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '100%' }} aria-label="simple table">
          <TableHead style={style.TableHeadingCss}>
            <TableRow style={style.flexOfrowSpaceBetween}>
              {arrayOfHeading.map((heading, index) =>
                <TableCell key={index} style={style.TableHeadCellCss}>{heading}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody >
            {studentData.map((row) => (
                  
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={style.flexOfrowSpaceBetween}
              >
                <TableCell align="left" style={style.TabelRowCellCss}>{row.firstName + " " + row.middleName + " " + row.lastName}</TableCell>
                <TableCell align="left" style={style.TabelRowCellCss}>{row.class}</TableCell>
                <TableCell align="left" style={style.TabelRowCellCss}>{row.rollNumber}</TableCell>
                <TableCell align="left" style={{ width: '20%', height: '25%' }} ><img style={style.TableImgCss} src={row.image} /></TableCell>
                <TableCell align="left" style={{ color: '#F33823', width: '20%' }}>
                  <VisibilityOutlinedIcon onClick={() => handleView(row)} sx={style.TableIconsCss} />
                  <BorderColorOutlinedIcon onClick={() => handleopenEdit(row)} sx={style.TableIconsCss} />
                  <DeleteForeverOutlinedIcon onClick={() => handleopenDelete(row._id)} />
                </TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Modal
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style.ModalBox}
            component="form"
            noValidate
            autoComplete="off"
          >
            <div style={style.FlexOfrow}>
              <TextField
                label={label ? "First Name" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                onClick={() => handleTextfieldClick()}
                value={updateStudent.firstName}
                name='firstName'
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Middle Name" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.middleName}
                name='middleName'
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Last Name" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.lastName}
                name='lastName'
                inputProps={readOnly}
              />
            </div>
            <div style={style.FlexOfrow}>
              <FormControl sx={style.FormControlCss}>
                <InputLabel id="demo-simple-select-helper-label">Select Class</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={updateStudent.class}
                  label="Select Class"
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                  name='class'
                  inputProps={readOnly}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {arrayOfClass.map((item, i) =>
                    <MenuItem key={i} value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <FormControl sx={style.FormControlCss}>
                <InputLabel id="demo-simple-select-helper-label">Select Division</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={updateStudent.division}
                  label="Select Division"
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                  name='division'
                  inputProps={readOnly}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {arrayOfDivision.map((item, i) =>
                    <MenuItem key={i} value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <TextField
                label={label ? "Enter Roll Number in Digits" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.rollNumber}
                name='rollNumber'
                inputProps={readOnly}
              />
            </div>
            <div style={style.FlexOfrowLargTaxField}>
              <TextField
                label={label ? "Address Line 1" : ""}
                style={style.TaxfieldLargeCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.addressLineOne}
                name='addressLineOne'
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Address Line 2" : ""}
                style={style.TaxfieldLargeCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.addressLineSecond}
                name='addressLineSecond'
                inputProps={readOnly}
              />
            </div>
            <div style={style.FlexOfrow}>
              <TextField
                label={label ? "Landmark" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.landmark}
                name='landmark'
                inputProps={readOnly}
              />
              <TextField
                label={label ? "City" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.city}
                name='city'
                inputProps={readOnly}
              />
              <TextField
                label={label ? "Pincode" : ""}
                style={style.TaxfieldSmallCss}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                value={updateStudent.pincode}
                name='pincode'
                inputProps={readOnly}
              />
            </div>
            <div>
              {buttonUpdate ? <Button variant="contained" onClick={() => handleUpdateStudent(updateStudent._id)} style={style.AddStudentButtonCss}> update</Button> : ""}

            </div>
          </Box>
        </Modal>
      </div>
      <div>

        <Modal
          open={openDelete}
          onClose={handleCancel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.ModalBox}>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this item
            </Typography>
            <div style={style.FlexofrowModa}>
              <Button variant='contained' onClick={handleCloseDelete} color='warning'>Delete</Button>
              <Button variant='contained' onClick={handleCancel} >Cancel</Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default ManageStudents;
