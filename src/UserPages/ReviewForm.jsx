import "../AdminPages/EditAcademy.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import Add from "@mui/icons-material/Add";
import "./Review.css";
import Rating from "@mui/material/Rating";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import React, { useState } from "react";
import { getListSubheaderUtilityClass } from "@mui/material";
import HeaderStudent from "../Components/HeaderStudent";

function ReviewForm(value1) {
  const [userId, setuserid] = useState("");
  const [courseId, setcourseid] = useState("");
  const [starRating, setrating] = useState("");
  const [message, setmessage] = useState("");
  const [value, setValue] = React.useState(2);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = { courseId, userId, message, starRating };
    console.log(user);
    if (courseId && userId && starRating && message) {
      fetch(value1.value1 + "user/addReview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(() => {
        window.location.href = "/user/ViewCourse";
      });
    } else {
      alert("No empty filled allowed");
    }
  };

  return (
    <div>
      <HeaderStudent />
      {/* <Grid
        container
        className="row"
        columnSpacing="3"
        item
        xs={12}
        sm={4}
        md={12}
      > */}
      <div className="addreviewcard-container">
        <div className="addreviewcard">
          <input
            type="text"
            className="review-elem"
            autoFocus
            value={userId}
            onChange={(e) => {
              var num = /[^0-9]/gi;
              let value = e.target.value.replace(num, "");
              setuserid(value);
              //  setuserid(e.target.value)
            }}
            // onChange={(e) => setuserid(e.target.value)}
            placeholder="Enter userId"
            id="userId"
          ></input>

          <input
            type="text"
            className="review-elem"
            autoFocus
            value={courseId}
            onChange={(e) => {
              var num = /[^0-9]/gi;
              let value = e.target.value.replace(num, "");
              setcourseid(value);
              //  setuserid(e.target.value)
            }}
            placeholder="Enter courseId"
            id="courseId"
          ></input>

          <textarea
            type="text"
            className="review-elem"
            //   value={mobileNumber}
            autoFocus
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            placeholder="Enter the message"
            id="message"
          ></textarea>

          {/* <input
            type="text"
            //   value={password}
            autoFocus
            value={starRating}
            onChange={(e) => setrating(e.target.value)}
            className="row1"
            placeholder="Enter the star rating"
            id="starRating"
          ></input> */}
          <div className="review-elem">
            <Rating
              name="simple-controlled"
              value={starRating}
              onChange={(event, newValue) => {
                setrating(newValue);
              }}
            />
          </div>

          <Button
            className="review-elem"
            onClick={handleOnSubmit}
            variant="contained"
            style={{ margin: "5px" }}
            startIcon={<Add />}
            color="primary"
          >
            Add review{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
