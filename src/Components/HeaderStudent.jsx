import React, { Component } from "react";
import "./HeaderStudent.css";
import AppBar from "@mui/material/AppBar";
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link from '@mui/material/Link'
// import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import "./Header.css";
import Account from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import { sizeWidth } from "@mui/system";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function HeaderStudent(props) {
  return (
    <div>
      <header className="container-nav">
        <div className="nav-logo">
          <span> PG Admission</span>
        </div>
        <div className="nav">
          <div className="nav-logout">
            <Logout
              id="logout"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/Login";
              }}
              sx={{ fontSize: 35 }}
            />{" "}
            <div>logout</div>
          </div>
          <div className="nav-profile">
            <Account sx={{ fontSize: 35 }} />

            <div>User Id:{localStorage.getItem("user")}</div>
          </div>
        </div>
      </header>

      <AppBar className="appbar1" position="static">
        <div className="container-below-nav  shed">
          <Toolbar
            className="options-below-nav toolbar1"
            sx={{ width: "50%", maxWidth: "600", mx: "auto" }}
          >
            <grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            >
              <grid item xs={4} md={4} className="gridheading">
                <Link
                  to="/user/HomepageStudent"
                  style={{ color: "white", textDecoration: "none" }}
                  underline="none"
                >
                  <IconButton
                    className="options-below-nav-items options-institute"
                    id="userInstitute"
                    edge="start"
                    ariel-label="menu"
                    sx={{ mr: 2 }}
                  >
                    Institute
                  </IconButton>
                </Link>
              </grid>

              {/* <grid item xs={4} md={4}  className="gridheading">
                  
                      <IconButton className="options-below-nav-items options-institute" edge="start" ariel-label="menu" sx={{mr:2}}>Institute</IconButton>
                      
                      </grid> */}
              <grid item xs={4} md={4} className="grid1">
                <Link
                  to="/user/ViewCourse"
                  style={{ color: "white", textDecoration: "none" }}
                  underline="none"
                >
                  <IconButton
                    className="options-below-nav-items options-courses"
                    id="userEnrolledCourses"
                    edge="start"
                    ariel-label="menu"
                    sx={{ mr: 2 }}
                  >
                    Courses
                  </IconButton>
                </Link>
              </grid>

              {/* <grid item xs={4} md={4}   className="grid1">
                    <Link to="/user/ReviewForm"  style={{color:"white", textDecoration:"none"} } underline='none'>
                      <IconButton className="options-below-nav-items options-courses" id="userEnrolledCourses" edge="start"  ariel-label="menu" sx={{mr:2}}>AddReview</IconButton>
                      </Link>
                      </grid>  */}

              <grid item xs={4} md={4} className="grid1">
                <Link
                  to="/user/EnrolledCourses"
                  style={{ color: "white", textDecoration: "none" }}
                  underline="none"
                >
                  <IconButton
                    className="options-below-nav-items options-courses"
                    id="userEnrolledCourses"
                    edge="start"
                    ariel-label="menu"
                    sx={{ mr: 2 }}
                  >
                    Enrolled Courses
                  </IconButton>
                </Link>
              </grid>
            </grid>
          </Toolbar>
        </div>
      </AppBar>
      <div></div>
      <Outlet />
    </div>
  );
}

export default HeaderStudent;
