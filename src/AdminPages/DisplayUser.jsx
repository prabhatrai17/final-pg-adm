import Header from "../Components/Header";
// import RowView from'./RowView';
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
// import EmployeeService from '../Services/StudentService'

const DisplayUser = (value1) => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getadmission();
  }, []);

  function getadmission() {
    fetch(value1.value1 + "admin/getAllAdmissionRequests")
      .then((response) => response.json())
      .then((p) => setData(p));
  }

  //   const[users,setUser]=useState('')
  //   const[name,setName]=useState('')
  //   const[mobileNumber,setMobile]=useState('')

  //   const[password,setPassword]=useState('')
  //   const[email,setEmail]=useState('')
  //   const[id,setid]=useState('')

  // const [data,setData]=useState([]);

  // useEffect(()=>{
  //  getusers();
  // },[]);

  // function getusers(){
  //   fetch("http://localhost:8080/UserModel")
  //   .then((response)=>response.json())
  //   .then((p) => {setData(p)
  //   setName(p[0].name)
  //   setEmail(p[0].email)
  //   setMobile(p[0].mobileNumber)
  //   setid(p[0].id)
  //   setPassword(p[0].password)
  //   }
  //   );
  // }

  function deleteadmission(admissionId) {
    // alert(id)
    fetch(value1.value1 + `admin/deleteAdmission?admissionId=${admissionId}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((resp) => {
        console.warn();
        getadmission();
      });
    });
  }

  // function selectUser(id)
  // {
  // console.alert("function called",users[id-1])
  // // let item=users[id-1]
  // // setName(item.name)
  // // setEmail(item.email)
  // // setMobile(item.mobileNumber)
  // // setid(item.id)
  // // setPassword(item.password)
  // }
  //id passde to edit user component
  function addid(adm_id) {
    console.log("inside addid user adm_id is:");
    console.log(adm_id);
    const toEditUser = () => {
      console.log(adm_id);
      navigate("/admin/EditUser", {
        state: { admid: { adm_id } },
      });
    };
    toEditUser();
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
            StudentId
          </Button>
          <Button variant="outlined" className="course-filter-elem">
            {" "}
            Student Name
          </Button>
          <Button variant="outlined" className="course-filter-elem">
            {" "}
            Course
          </Button>
        </div>
      </div>

      <table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>courseId</th>
            <th>name</th>
            <th>email</th>
            <th>mobileNo</th>
            <th>gender</th>
            <th>fatherName</th>
            <th>motherName</th>
            <th>hscName</th>
            <th>hscMarks</th>
            {/* <th>Address</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr key={datas.admissionId}>
              {/* <td>{datas.userId}</td> */}
              <td>{datas.courseId} </td>
              <td>
                {datas.firstName} {datas.lastName}
              </td>
              <td>{datas.email}</td>
              <td>{datas.mobile}</td>
              <td>{datas.gender}</td>
              <td>{datas.fatherName}</td>
              <td>{datas.motherName}</td>
              <td>{datas.hscName}</td>
              <td>{datas.hscMarks}</td>
              {/* <td>{datas.houseNumber}  {datas.streetNumber} {datas.areaName} {datas.state} {datas.pincode} , {datas.nationality}</td> */}
              <td>
                {/* <Link
                  to={"/admin/EditUser"}
                  style={{ color: "white", textDecoration: "none" }}
                > */}
                <a
                  onClick={() => {
                    console.log("datas before passs :");
                    console.log(datas.admissionId);
                    addid(datas.admissionId);
                  }}
                >
                  <button
                    className="zindex"
                    // onClick={()=>selectUser(datas.id)}
                    variant="contained"
                    style={{
                      margin: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      zIndex: -1,
                    }}
                    endIcon={<Edit />}
                    color="primary"
                  >
                    Update/View{" "}
                  </button>
                </a>
                {/* </Link> */}

                <button
                  className="zindex"
                  onClick={() => deleteadmission(datas.admissionId)}
                  variant="contained"
                  style={{
                    margin: "5px",
                    backgroundColor: "red",
                    color: "white",
                    zIndex: -1,
                  }}
                  color="error"
                  endIcon={<Delete />}
                >
                  Delete
                </button>
              </td>
            </tr>

            //  <li></li>
          ))}

          {/* <tr > */}
          {/* { data.map((item)=>(
      <td>{item.name}</td> */}
          {/* ))} */}

          {/* <td> {data.id} </td>   
        <td>{data.name} </td>
        <td>{data.email} </td>

       

        <td>{data.mobileNumber}</td> */}

          {/* </tr> */}
        </tbody>
      </table>
      <div className="btnadd">
        <Link
          to="/admin/AddUser"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            className="btn btn-submit"
            //  onClick={getemail}
            type="submit"
            variant="contained"
            style={{ margin: "5px", zIndex: -1 }}
            startIcon={<Add />}
            color="primary"
          >
            Add Student{" "}
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default DisplayUser;
