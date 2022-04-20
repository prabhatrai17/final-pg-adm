import Header from "../Components/Header";

import Button from "@mui/material/Button";
import { useState, React, useEffect } from "react";

import Grid from "@mui/material/Grid";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./DisplayUser.css";
// import Link from '@mui/material/Link'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";
import Search from "@mui/icons-material/Search";
import { Table, TableHead, TableRow, TableBody } from "@mui/material";

// import React, { Component } from 'react'

import {
  BackspaceOutlined,
  CountertopsOutlined,
  DeleteForeverOutlined,
  EditAttributes,
} from "@mui/icons-material";
// import '../AdminPages/DisplayUser.css';

const ViewCourse = (value1) => {
  // const [courseName,setname]=useState("");
  //   const [courseDescription,setdescription]=useState("");
  //   const [courseTiming,settiming]=useState("");
  //   const [courseStudentCount,setcount]=useState("");
  //   const [courseAcademicYear,setyear]=useState("");
  //   const [courseRequiredPercentage,setpercentage]=useState("");
  //   const [courseDuration,setduration]=useState("");
  //   const [courseId,setid]=useState("");

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getusers();
  }, []);

  function getusers() {
    fetch(value1.value1 + "admin/viewCourses")
      .then((response) => response.json())
      .then((p) => setData(p));
  }

  function deleteUser(courseId) {
    // alert(id)
    fetch(value1.value1 + `admin/deleteCourse/${courseId}`, {
      method: "DELETE",
    }).then((response) => {
      response
        .json()
        .then((resp) => {
          console.warn();
          getusers();
        })
        .then(() => {
          window.location.href = "/admin/ViewCourse";
        });
    });
  }

  const set = (data) => {
    console.log(data);
    // console.log(data.courseId)
    let {
      courseName,
      courseDuration,
      courseDescription,
      courseTiming,
      courseStudentCount,
      courseAcademicYear,
      courseRequiredPercentage,
      courseId,
    } = data;
    localStorage.setItem("CourseId", courseId);
    console.log(courseId);
    localStorage.setItem("CourseName", courseName);
    localStorage.setItem("CourseDescription", courseDescription);
    localStorage.setItem("CourseTiming", courseTiming);
    localStorage.setItem("CourseStudentCount", courseStudentCount);
    localStorage.setItem("CourseAcademicYear", courseAcademicYear);
    localStorage.setItem("CourseRequiredPercentage", courseRequiredPercentage);
    localStorage.setItem("CourseDuration", courseDuration);
  };

  //id passde to edit course component
  function addid(course_id) {
    console.log("inside addid course");
    console.log(course_id);
    const toEditCourse = () => {
      console.log(course_id);
      navigate("/admin/EditCourses", {
        state: { currentid: { course_id } },
      });
    };
    toEditCourse();
  }

  return (
    <div>
      <Header />

      <div className="course-search-and-filter">
        <div className="course-search">
          <input
            className="course-search-input"
            type="text"
            name="course"
            placeholder="Search Course"
          ></input>
          <Button variant="outlined" id="searchCourse" className="btn">
            {" "}
            Search
          </Button>
        </div>
        <div className="course-filter">
          <div className="filter1">Filter By</div>

          <Button variant="outlined" className="course-filter-elem">
            {" "}
            Institute Name
          </Button>
          {/* <Button variant="outlined" className="course-filter-elem"> Student Name</Button> */}
          <Button variant="outlined" className="course-filter-elem">
            {" "}
            Course
          </Button>
        </div>
      </div>

      <table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>CourseId</th>
            <th>CourseName</th>
            <th>InstituteName</th>
            <th>CourseDescription</th>
            <th>Duration</th>
            <th>Timing</th>
            <th>studentEnrolled</th>
            <th>AcademicYear</th>
            <th>RequiredPercentage</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr key={datas.courseId}>
              <td>{datas.courseId} </td>
              <td>{datas.courseName}</td>
              <td>{datas.instituteName}</td>
              <td>{datas.courseDescription}</td>
              <td>{datas.courseDuration}</td>
              <td>{datas.courseTiming}</td>
              <td> {datas.courseStudentCount}</td>
              <td>{datas.courseAcademicYear}</td>
              <td>{datas.courseRequiredPercentage}</td>

              <td>
                {/* <Link
                  to="/admin/EditCourses/"
                  style={{ color: "Black", textDecoration: "none" }}
                > */}
                <a
                  onClick={() => {
                    console.log("datas before passs :");
                    console.log(datas.courseId);
                    addid(datas.courseId);
                  }}
                >
                  <button
                    className="zindex"
                    // onClick={() => set(data)}
                    variant="contained"
                    style={{
                      margin: "5px",
                      backgroundColor: "blue",
                      color: "white",
                    }}
                    endIcon={<EditAttributes />}
                    color="primary"
                  >
                    Edit <Edit />{" "}
                  </button>
                </a>
                {/* </Link> */}
                <button
                  className="zindex"
                  variant="contained"
                  style={{
                    margin: "5px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                  endIcon={<DeleteForeverOutlined />}
                  onClick={() => deleteUser(datas.courseId)}
                  color="primary"
                >
                  Delete <DeleteForeverOutlined />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btnadd">
        <Link
          to="/admin/AddCourses"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            className="btn btn-submit"
            type="submit"
            variant="contained"
            style={{ margin: "5px" }}
            startIcon={<Add />}
            color="primary"
          >
            Add Course
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default ViewCourse;
