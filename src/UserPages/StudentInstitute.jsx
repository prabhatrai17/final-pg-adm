import React, { Component } from "react";

// import InstitutecardStudent from '../Components/InstituteCard';

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "../Components/HomePage.css";
import { Link, Outlet } from "react-router-dom";
import Add from "@mui/icons-material/Add";
import HeaderStudent from "../Components/HeaderStudent";
import Card from "../Components/Card";
import UserCard from "../Components/UserInstituteCards";

function StudentInstitute(value1) {
  return (
    <div>
      <HeaderStudent />

      <div className="course-search-and-filter">
        <div className="course-search">
          <input
            className="course-search-input"
            type="text"
            name="course"
            placeholder="Search Institute"
          ></input>
          <Button variant="outlined" id="searchCourse" className="btn">
            Search
          </Button>
        </div>
        <div className="course-filter">
          <div className="filter1">Filter By</div>

          <Button variant="outlined"> Location</Button>
          {/* <Button variant="outlined" > Institute</Button>
        <Button variant="outlined" > Course</Button> */}
        </div>
      </div>

      {/* <Grid  container  rowSpacing={1} columnSpacing={{xs:1,sm:2,md:3}}>
            <Grid  id="userInstituteGrid1" item xs={12} md={4}> */}
      <UserCard />
      {/* </Grid>
                <Grid id="userInstituteGrid2" item xs={12} md={4}>
              <UserCard/>
                </Grid>
                <Grid  id="userInstituteGrid3" item xs={12} md={4}>
                <UserCard/>
                </Grid>
                </Grid> */}

      <div className="App">
        <div className="container"></div>
      </div>

      <Outlet />
    </div>
  );
}

export default StudentInstitute;
