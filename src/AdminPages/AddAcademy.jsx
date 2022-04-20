import React, { Component, useState } from "react";
import "./AddAcademy.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import Add from "@mui/icons-material/Add";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { BackspaceOutlined } from "@mui/icons-material";

function AddAcademy(value1) {
  const [instituteName, setname] = useState("");
  const [instituteDescription, setdescription] = useState("");
  const [instituteState, setstate] = useState("");

  const [instituteCity, setcity] = useState("");
  const [instituteEmail, setemail] = useState("");
  const [instituteMobile, setmobilenumber] = useState("");
  const [nirfRank, setrank] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      instituteName,
      instituteDescription,
      instituteState,
      instituteCity,
      instituteEmail,
      instituteMobile,
      nirfRank,
    };
    console.log(user);

  if( instituteName &&
    instituteDescription &&
    instituteState &&
    instituteCity &&
    instituteEmail &&
    instituteMobile &&
    nirfRank){
    fetch(value1.value1+"admin/addInstitute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      window.location.href = "/admin/ViewInstitute";
    });
  
  }
  else 
{
   alert("Fileds can't be empty")
}
  };

  return (
    <div>
      <Header />

      <div className="enroll_form_container">
        <div className="enroll_form_container-below">
          <input
            required
            type="text"
            className="row1"
            autoFocus
            value={instituteName}
            onChange={(e) => {
              var letter = /^[a-zA-Z]*$/;
              let value=e.target.value;
              if (!e.target.value.match(letter)) {
                value = "";
              }
              setname(value);
              //   setname(e.target.value);
            }}
            placeholder="Enter Academy name"
            id="academyName"
          ></input>

          <input
            required
            type="text"
            className="row1"
            autoFocus
            value={instituteMobile}
            onChange={(e) => {
              var num = /[^0-9]/gi;
              let value = e.target.value.replace(num, "");
              setmobilenumber(value);
            }}
            //onChange={(e) => setmobilenumber(e.target.value)}
            placeholder="Enter the contact number"
            id="contactNumber"
          ></input>

          <input
            required
            type="text"
            className="row1"
            autoFocus
            value={instituteState}
            onChange={(e) => {
              var letter = /^[a-zA-Z]*$/;
              let value=e.target.value;
              if (!e.target.value.match(letter)) {
                value = "";
              }
              setstate(value);
              //   setname(e.target.value);
            }}
            //onChange={(e) => setstate(e.target.value)}
            placeholder="Enter the academy image url"
            id="imageUrl"
          ></input>

          <input
            type="email"
            autoFocus
            value={instituteEmail}
            // onChange={(e) => {
            //   var letter = /^\S+@\S+\.\S+$/;
            //   let value;
            //   if (!e.target.value.match(letter)) {
            //     value = "";
            //   }
            //   setemail(value);
            //   setname(e.target.value);
            //}}
            onChange={(e) => setemail(e.target.value)}
            className="row1"
            placeholder="Enter the academy email"
            id="emailId"
            required
          ></input>

          <input
            required
            type="text"
            className="row1"
            autoFocus
            value={instituteCity}
            //onChange={(e) => setcity(e.target.value)}
            onChange={(e) => {
              var letter = /^[a-zA-Z]*$/;
              let value=e.target.value;
              if (!e.target.value.match(letter)) {
                value = "";
              }
              setcity(value);
              //   setname(e.target.value);
            }}
            placeholder="Enter academy location"
            id="academyLocation"
          ></input>

          {/* <input type="text"  className='row1' placeholder="Enter academy description" id="academyDescription"></input> */}
          <textarea
            required
            className="row1 textareainstitute"
            autoFocus
            value={instituteDescription}
            onChange={(e) => {
              var letter = /^[a-zA-Z]*$/;
              let value=e.target.value;
              if (!e.target.value.match(letter)) {
                value = "";
              }
              setdescription(value);
              //   setname(e.target.value);
            }}
            //onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter academy description"
            id="academyDescription"
          ></textarea>

          {/* <input type="text"  className='row1' placeholder="Enter academy description" id="academyDescription"></input> */}
          <input
            className="row1"
            autoFocus
            value={nirfRank}
            onChange={(e) => {
              var num = /[^0-9]/gi;
              let value = e.target.value.replace(num, "");
              setrank(value);
            }}
            //onChange={(e) => setrank(e.target.value)}
            placeholder="Enter academy rank"
            id="academyRank"
            required
          ></input>

          <Button
            className="row1"
            onClick={handleOnSubmit}
            type="submit"
            variant="contained"
            style={{ margin: "5px" }}
            startIcon={<Add />}
            color="primary"
          >
            Add Academy{" "}
          </Button>

          {/* <span>
<Link   to="/admin/ViewInstitute" style={{color:"white",textDecoration:"none"}}  >

<Button 
 className="btn btn-submit"
//  onClick={getemail}
  type="submit"
variant="contained" style={{margin:"5px"}} startIcon={<BackspaceOutlined/>} color="primary">Back</Button> 
  </Link> 
  </span> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AddAcademy;
