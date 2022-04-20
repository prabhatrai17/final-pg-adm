import React, { Component, useState, useEffect } from "react";

import Button from "@mui/material/Button";
import "./Course.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Delete from "@mui/icons-material/Delete";
import AddBox from "@mui/icons-material/AddBox";
import Grid from "@mui/material/Grid";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
// import  from '../Components/InstituteCard';

import { Link, Outlet } from "react-router-dom";
import CourseSearchFilter from "../Components/CourseSearchFilter";
import HeaderStudent from "../Components/HeaderStudent";
import EnrolledCourseCard from "./enrolledcoursecard";

function EnrolledCourse(value1) {
  const [enrolleddata, setEnrolleddata] = useState([]);

  useEffect(() => {
    get_en_courses();
  }, []);

  function get_en_courses() {
    fetch(value1.value1+"admin/getAllAdmissionRequests")
      .then((response) => response.json())
      .then((res) => {
        setEnrolleddata(res);
        //setNo_courses(p.length);
        //console.log("length of courses array :" + p.length);
      });
    console.log("inside getcourses");
    //console.log(p.length);
  }
  return (
    <div>
      <HeaderStudent />

      <div className="course-card-container">
        <EnrolledCourseCard enrolleddata={enrolleddata} />;
        {/* <div className="card">
          <div className="container">
            <Grid container className="rowgrid" item xs={12} sm={4} md={12}>
              <Grid className="gridelement">
                <p>course name :</p>
              </Grid>
              <Grid className="gridelement">
                <p>Number of student :</p>
              </Grid>
              <Grid className="gridelement">
                <p> Course Duration :</p>
              </Grid>
            </Grid>

            <Grid container className="rowgrid" item xs={12} sm={4} md={12}>
              <Grid className="gridelement">
                <p>Course Description :</p>
              </Grid>
              <Grid className="gridelement">
                <p>Course Available timing :</p>
              </Grid>
              <Grid className="gridelement">
                <p>Institute Name :</p>
              </Grid>
            </Grid>
          </div>
          <div>
            {" "}
            <Button
              variant="outlined"
              startIcon={<AddBox />}
              style={{ marginLeft: "10px" }}
              disabled
            >
              Enrolled
            </Button>
          </div>

          <div></div>
        </div> */}
      </div>
      <Outlet />
    </div>
  );
}
export default EnrolledCourse;
