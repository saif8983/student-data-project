import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar';
import AddStudents from './Components/AddStudents';
import ManageStudents from './Components/ManageStudents';
function App() {
  return (
    <>
    {/*That is layout of app i used react-router-dom*/}
    <BrowserRouter>
    <div class="container">
  <div class="Navbar"><Navbar/></div>
  <div class="sidebar"><Sidebar/></div>
  <div class="main-container">
  <Routes>
  <Route exact path="/" element={<AddStudents/>}/>
        <Route exact path="/Manage" element={<ManageStudents/>}/>
  </Routes>
  </div>
</div>
</BrowserRouter>
    </>
  );
}

export default App;
