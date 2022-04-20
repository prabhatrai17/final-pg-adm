// import React, { Component } from 'react';
import "./EditAcademy.css";
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
  useLocation,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import { getListSubheaderUtilityClass } from "@mui/material";

function EditAcademy(value1) {
  const [data, setData] = useState([{}]);
  // const [nirf, setNirf] = useState(0);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setMobile] = useState(0);
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [ins_des, setIns_des] = useState("");
  const location = useLocation();
  console.log(location.state.currentid.ins_id);
  var ins_id = location.state.currentid.ins_id;
  const [in_id, setIns_id] = useState(ins_id);
  console.log("ins_id :" + ins_id);
  // const { state } = value1.location;
  // const { currentid } = value1.match.state;
  // console.log("id passed on edit acadmy value is :");
  // console.log(props);
  useEffect(() => {
    var ins_id = location.state.currentid.ins_id;
    console.log("ins_id inside useeffecet:" + ins_id);
    getInstitute(ins_id);
  }, []);
  // function setallstates(){
  //   setName(datas.instituteName),
  //   setIns_des(datas.instituteDescription),
  //   setState(datas.instituteState),
  //   setCity(datas.instituteCity),
  //   setEmail(datas.instituteEmail),
  //   setMobile(datas.instituteMobile),
  //   setNirf(datas.nirfRank),
  // }

  function getInstitute(ins_id) {
    console.log("ins_id inside getintitute :" + ins_id);
    fetch(value1.value1 + `admin/viewInstitute/${ins_id}`)
      .then((response) => response.json())
      .then((p) => {
        setData((prev) => [p]);
        console.log(p);
      });
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const user = {
    //   name,
    //   ins_des,
    //   state,
    //   city,
    //   email,
    //   mobileNumber,
    //   nirf,
    // };
    // console.log(user);
    console.log(data[0]);

    fetch(value1.value1 + "admin/editInstitute/" + in_id, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data[0]),
    }).then(() => {
      window.location.href = "/admin/ViewInstitute";
    });
  };

  return (
    <div>
      <Header />

      {data.map((datas) => (
        <div className="enroll_form_container">
          <div className="enroll_form_container-below">
            <input
              required
              type="text"
              className="row1"
              name="academyName"
              defaultValue={datas.instituteName}
              // onChange={(e) => {
              //   var letter = /^[a-zA-Z]*$/;
              //   let value;
              //   if (!e.target.value.match(letter)) {
              //     value = "";
              //   }
              //   setName(value);
              // }}
              // onLoad={setName(datas.instituteName)}
              onChange={(e) => {
                var name = e.target.name;
                var value = e.target.value;
                console.log(data);
                setData((prev) => {
                  console.log("prev contains");
                  console.log(prev[0]);
                  var tempobj = prev[0];
                  console.log(tempobj.instituteName);
                  tempobj.instituteName = value;
                  // var newobj = { ...prev, instituteName: "abc" };
                  console.log(tempobj);
                  return [tempobj];
                });
                //setName(e.target.value);
              }}
              placeholder="Enter Academy name"
              id="academyName"
            ></input>

            <input
              required
              type="text"
              defaultValue={datas.instituteMobile}
              onChange={(e) => {
                var num = /[^0-9]/gi;
                var value = e.target.value.replace(num, "");
                // value = e.target.value;

                setData((prev) => {
                  var tempobj = prev[0];
                  tempobj.instituteMobile = value;
                  return [tempobj];
                });

                //setMobile(value);
              }}
              className="row1"
              placeholder="Enter the contact number"
              id="contactNumber"
            ></input>

            <input
              required
              type="text"
              className="row1"
              defaultValue={datas.instituteCity}
              // onChange={(e) => {
              //   var letter = /^[a-zA-Z]*$/;
              //   let value;
              //   if (!e.target.value.match(letter)) {
              //     value = "";
              //   }
              //   setCity(value);
              // }}
              onChange={(e) => {
                var letter = /^[a-zA-Z]*$/;
                let value = e.target.value;

                if (!e.target.value.match(letter)) {
                  value = "";
                }
                setData((prev) => {
                  var tempobj = prev[0];
                  tempobj.instituteCity = value;
                  return [tempobj];
                });
                //setCity(e.target.value);
              }}
              placeholder="Enter Insititute City"
              id="imageUrl"
            ></input>

            <input
              required
              type="email"
              defaultValue={datas.instituteEmail}
              // onChange={(e) => {
              //   var letter = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
              //   let value;
              //   if (!e.target.value.match(letter)) {
              //     value = "";
              //   }
              //   setEmail(value);
              // }}
              onChange={(e) => {
                let value = e.target.value;
                setData((prev) => {
                  var tempobj = prev[0];
                  tempobj.instituteEmail = value;
                  return [tempobj];
                });
                //setEmail(e.target.value);
              }}
              className="row1"
              placeholder="Enter the academy email"
              id="emailId"
            ></input>

            <input
              required
              type="text"
              className="row1"
              defaultValue={datas.instituteState}
              // onChange={(e) => {
              //   var letter = /^[a-zA-Z]*$/;
              //   let value;
              //   if (!e.target.value.match(letter)) {
              //     value = "";
              //   }
              //   setState(value);
              // }}
              onChange={(e) => {
                // var letter = /^[a-zA-Z]*$/;
                let value = e.target.value;
                // if (!e.target.value.match(letter)) {
                //   value = "";
                // }
                setData((prev) => {
                  var tempobj = prev[0];
                  tempobj.instituteState = value;
                  return [tempobj];
                });
                //setState(e.target.value);
              }}
              placeholder="Enter academy State"
              id="academyLocation"
            ></input>

            <textarea
              required
              className="row1"
              defaultValue={datas.instituteDescription}
              placeholder="Enter academy description"
              id="academyDescription"
              onChange={(e) => {
                // var letter = /^[a-zA-Z]*$/;
                let value = e.target.value;

                // if (!e.target.value.match(letter)) {
                //   value = "";
                // }
                setData((prev) => {
                  var tempobj = prev[0];
                  tempobj.instituteDescription = value;
                  return [tempobj];
                });
                //setIns_des(e.target.value);
              }}
            ></textarea>
            <input
              required
              type="text"
              defaultValue={datas.nirfRank}
              // onChange={(e) => {
              //   var num = /[^0-9]/gi;
              //   let value = e.target.value.replace(num, "");
              //   setNirf(value);
              // }}
              onChange={(e) => {
                var num = /[^0-9]/gi;
                var value = e.target.value.replace(num, "");
                // value = e.target.value;

                setData((prev) => {
                  var tempobj = prev[0];
                  tempobj.nirfRank = value;
                  return [tempobj];
                });

                //setMobile(value);
              }}
              className="row1"
              placeholder="Enter nirf rank"
              id="nirf"
            ></input>

            <div className="row1">
              <Button
                variant="contained"
                style={{ margin: "5px" }}
                startIcon={<Add />}
                color="primary"
                onClick={handleOnSubmit}
              >
                Update Academy{" "}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditAcademy;
