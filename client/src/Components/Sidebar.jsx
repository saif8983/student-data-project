import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import style from "../Utils/style";
import "../App.css";
{
  /* That is sidebar*/
}
const Sidebar = () => {
  const [backgroundColorManage, setBackgroundColorManage] = useState("");
  const [backgroundColorAdd, setBackgroundColorAdd] = useState("");
  const navigate = useNavigate();
  {
    /* when handleclickmanage triggered background of click manage change*/
  }
  const handleClickManage = () => {
    navigate("/Manage");
    setBackgroundColorManage({
      backgroundColor: "#F33823",
      textColor: "#ffffff",
    });
    setBackgroundColorAdd("");
  };
  {
    /* when handleaddstudent triggered background of click addstudent button change*/
  }
  const handleClickAddStudentPage = () => {
    navigate("/");
    setBackgroundColorAdd({ backgroundColor: "#F33823" });
    setBackgroundColorManage("");
  };
  return (
    <div>
      <ul className="SidebarList">
        <li>
          <Button
            style={style.SidebarButtonCss}
            sx={backgroundColorAdd}
            onClick={() => handleClickAddStudentPage()}
            variant="text"
          >
            {" "}
            <PeopleOutlineIcon style={style.SidebarIconsCss} />
            Add Student
          </Button>
        </li>
        <li>
          <Button
            style={style.SidebarButtonCss}
            sx={backgroundColorManage}
            onClick={() => handleClickManage()}
            variant="text"
          >
            <NotesOutlinedIcon style={style.SidebarIconsCss} />
            Manage Students
          </Button>
        </li>
        <li>
          <Button style={style.SidebarButtonCss} variant="text">
            <LogoutOutlinedIcon style={style.SidebarIconsCss} />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
