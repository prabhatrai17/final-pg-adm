import "./AddUser.css";
import { useState, React, useEffect } from "react";
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

function AddUser(value1) {
  let row1 = {
    marginTop: "15px",
    padding: "10px",
    marginRight: "90px",
    width: "350px",
    marginLeft: "30px",
  };
  let row = {
    margintop: "10px",
    width: "100%",
  };
  let emailage = {
    width: "500px",
    marginTop: "15px",
    padding: "10px",
    marginRight: "90px",
    marginLeft: "30px",
  };
  let emailagegrid = {
    width: "500px",
    marginTop: "15px",
    padding: "3px",
    // marginRight:"90px",

    marginLeft: "30px",
  };

  let addrinfo = {
    marginTop: "15px",
    padding: "10px",
    marginLeft: "120px",
    width: "815px",
    height: "290px",
    marginLeft: "14px",
  };

  let button = {
    position: "relative",
    left: "750px",
    margin: "20px",
  };
  const [userId, setuserid] = useState("");
  const [courseId, setcourseid] = useState("");
  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");
  const [mobile, setmobile] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [fatherName, setfathername] = useState("");
  const [motherName, setmothername] = useState("");
  const [eligibility, seteligibility] = useState("");
  const [hscName, sethscname] = useState("");
  const [hscMarks, sethscmarks] = useState("");
  const [age, setage] = useState("");
  const [houseNumber, sethouseno] = useState("");
  const [streetNumber, setstreetnumber] = useState("");
  const [areaName, setareaname] = useState("");
  const [pinCode, setpin] = useState("");
  const [state, setstate] = useState("");
  const [nationality, setnationality] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      courseId,
      userId,
      firstName,
      lastName,
      mobile,
      gender,
      email,
      fatherName,
      motherName,
      eligibility,
      hscName,
      hscMarks,
      age,
      houseNumber,
      streetNumber,
      areaName,
      pinCode,
      state,
      nationality,
    };
    console.log(user);

    fetch(value1.value1 + "user/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      window.location.href = "/admin/DisplayUser";
    });
  };

  return (
    <div>
      <Header />

      <form action="" method="">
        <Grid
          container
          style={row}
          columnSpacing="3"
          item
          xs={12}
          sm={4}
          md={12}
        >
          <Grid style={row1}>
            <input
              type="text"
              style={row1}
              autoFocus
              value={userId}
              onChange={(e) => {
                var num = /[^0-9]/gi;
                let value = e.target.value.replace(num, "");
                setuserid(value);
                //  setuserid(e.target.value)
              }}
              placeholder="enter userId"
              id="userId"
            ></input>
          </Grid>

          <Grid style={row1}>
            <input
              type="text"
              autoFocus
              value={courseId}
              onChange={(e) => {
                var num = /[^0-9]/gi;
                let value = e.target.value.replace(num, "");

                setcourseid(value);
              }}
              style={row1}
              placeholder="enter courseId"
              id="courseId"
            ></input>
          </Grid>

          <Grid style={row1}>
            <select
              style={row1}
              required
              placeholder="enter eligibility"
              autoFocus
              value={eligibility}
              onChange={(e) => seteligibility(e.target.value)}
              id="options"
            >
              <option value="" disabled selected>
                {" "}
                enter eligibility
              </option>
              <option value="yes">yes</option>
              <option value="no">No</option>
            </select>

            {/* <input type="text"
                
                  style={row1} placeholder="enter eligibility" id="eligibility"></input> */}
          </Grid>
        </Grid>

        <Grid
          container
          style={row}
          columnSpacing="3"
          item
          xs={12}
          sm={4}
          md={12}
        >
          <Grid style={row1}>
            <input
              type="text"
              style={row1}
              autoFocus
              value={firstName}
              onChange={(e) => {
                var letter = /^[a-zA-Z]*$/;
                let value = e.target.value;
                if (!e.target.value.match(letter)) {
                  value = "";
                }

                setfname(value);
              }}
              placeholder="enter your first name"
              id="firstName"
            ></input>
          </Grid>

          <Grid style={row1}>
            <input
              type="text"
              autoFocus
              value={lastName}
              onChange={(e) => {
                var letter = /^[a-zA-Z]*$/;
                let value = e.target.value;
                if (!e.target.value.match(letter)) {
                  value = "";
                }
                setlname(value);
              }}
              style={row1}
              placeholder="enter your last name"
              id="lastName"
            ></input>
          </Grid>

          <Grid style={row1}>
            <input
              type="text"
              autoFocus
              value={gender}
              onChange={(e) => {
                var letter = /^[a-zA-Z]*$/;
                let value = e.target.value;
                if (!e.target.value.match(letter)) {
                  value = "";
                }
                setgender(e.target.value);
              }}
              style={row1}
              placeholder="enter male or female"
              id="male/female"
            ></input>
          </Grid>
        </Grid>

        <Grid container style={row} item xs={12} sm={4} md={12}>
          <Grid style={row1}>
            <input
              type="text"
              autoFocus
              value={fatherName}
              onChange={(e) => {
                var letter = /^[a-zA-Z]*$/;
                let value = e.target.value;
                if (!e.target.value.match(letter)) {
                  value = "";
                }
                setfathername(value);
              }}
              style={row1}
              placeholder="enter your father name"
              id="fatherName"
            ></input>
          </Grid>

          <Grid style={row1}>
            <input
              type="text"
              autoFocus
              value={mobile}
              onChange={(e) => {
                var num = /[^0-9]/gi;
                let value = e.target.value.replace(num, "");
                setmobile(value);
              }}
              style={row1}
              placeholder="enter phone number"
              id="phoneNumber1"
            ></input>
          </Grid>

          <Grid style={row1}>
            <input
              style={row1}
              type="text"
              autoFocus
              value={age}
              onChange={(e) => {
                var num = /[^0-9]/gi;
                let value = e.target.value.replace(num, "");
                setage(value);
              }}
              placeholder="enter your age"
              id="age"
            ></input>
          </Grid>
        </Grid>

        <Grid container style={row} item xs={12} sm={4} md={12}>
          <Grid>
            <Grid style={row1}>
              <input
                style={row1}
                type="text"
                autoFocus
                value={motherName}
                onChange={(e) => {
                  var letter = /^[a-zA-Z]*$/;
                  let value = e.target.value;
                  if (!e.target.value.match(letter)) {
                    value = "";
                  }
                  setmothername(value);
                }}
                placeholder="enter your mother name"
                id="motherName"
              ></input>
            </Grid>

            <Grid style={row1}>
              <input
                style={row1}
                type="text"
                autoFocus
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="enter emailId"
                id="emailId"
              ></input>
            </Grid>
            {/* <Grid style={emailagegrid} container  >
                 <input type="text" 
                   autoFocus
                //    value={mobileNumber}
                //    onChange={(e)=>setgender(e.target.value)}
                  style={row1} placeholder="enter alternate no" id="phoneNumber2"></input> 
                     */}

            <Grid style={row1}>
              <input
                type="text"
                autoFocus
                value={hscName}
                onChange={(e) => {
                  var letter = /^[a-zA-Z]*$/;
                  let value = e.target.value;
                  if (!e.target.value.match(letter)) {
                    value = "";
                  }
                  sethscname(value);
                }}
                style={row1}
                placeholder="enter hsc name"
                id="hscName"
              ></input>
            </Grid>

            {/* </Grid> */}
          </Grid>
          <Grid>
            <fieldset style={addrinfo} className="addressinfo">
              <legend>Address Information</legend>
              <label for="houseNo">House No :</label>
              <input
                className="element"
                type="text"
                autoFocus
                value={houseNumber}
                onChange={(e) => {
                  var num = /[^0-9]/gi;
                  let value = e.target.value.replace(num, "");

                  sethouseno(value);
                }}
                id="houseNo"
                name="houseNo"
              ></input>{" "}
              <br></br>
              <label for="streetName">Street Number :</label>
              <input
                className="element"
                type="text"
                autoFocus
                value={streetNumber}
                onChange={(e) => {
                  setstreetnumber(e.target.value);
                }}
                id="streetName"
                name="streetName"
              ></input>
              <br></br>
              <label for="areaName">Area Name :</label>
              <input
                className="element"
                type="text"
                autoFocus
                value={areaName}
                onChange={(e) => setareaname(e.target.value)}
                id="areaName"
                name="areaName"
              ></input>
              <label for="pincode">Pincode :</label>
              <input
                type="text"
                id="pincode"
                autoFocus
                value={pinCode}
                onChange={(e) => {
                  var num = /[^0-9]/gi;
                  let value = e.target.value.replace(num, "");
                  setpin(value);
                }}
                name="pincode"
              ></input>{" "}
              <br></br>
              <label for="state">State :</label>
              <input
                className="element"
                type="text"
                autoFocus
                value={state}
                onChange={(e) => {
                  var letter = /^[a-zA-Z]*$/;
                  let value = e.target.value;
                  if (!e.target.value.match(letter)) {
                    value = "";
                  }

                  setstate(value);
                }}
                id="state"
                name="state"
              ></input>
              <label for="nationality">Nationality :</label>
              <input
                type="text"
                id="nationality"
                autoFocus
                value={nationality}
                onChange={(e) => setnationality(e.target.value)}
                name="nationality"
              ></input>
            </fieldset>
          </Grid>

          <Grid container style={row} item xs={12} sm={4} md={12}>
            <Grid style={row1}>
              <input
                type="text"
                autoFocus
                value={hscMarks}
                onChange={(e) => {
                  var num = /[^0-9]/gi;
                  let value = e.target.value.replace(num, "");
                  sethscmarks(value);
                }}
                style={row1}
                placeholder="enter hsc marks"
                id="hscMarks"
              ></input>
            </Grid>

            <Grid style={row1}></Grid>
          </Grid>

          <Grid style={button} item xs={3} sm={1} md={1}>
            <Link
              to="/admin/DisplayUser"
              style={{ color: "Black", textDecoration: "none" }}
            >
              <Button
                variant="contained"
                className="btn btn-submit"
                onClick={handleOnSubmit}
                type="submit"
                color="primary"
              >
                Add User
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
      {/* <Footer /> */}
      <Outlet />
    </div>
  );
}

export default AddUser;
