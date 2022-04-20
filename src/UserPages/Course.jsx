import React, { useState, useEffect } from "react";

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
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Review from "./Review";
import RateReviewIcon from "@mui/icons-material/RateReview";
import GetRating from "./GetRating";

import { Link, Outlet } from "react-router-dom";
import CourseSearchFilter from "../Components/CourseSearchFilter";
import HeaderStudent from "../Components/HeaderStudent";
import zIndex from "@mui/material/styles/zIndex";

function Course(value1) {
  const [data, setData] = useState([]);
  const [no_courses, setNo_courses] = useState(0);
  const [value, setValue] = useState(0);
  const [reviewarr, setReviewarr] = useState([]);
  const [ratevalue, setRateValue] = React.useState(2);
  const [expandReview, setExpandReview] = useState(false);
  useEffect(() => {
    getcourses();
    //getallreviews();
  }, []);

  // useEffect(() => {
  //   return ratevalue;
  // }, [ratevalue]);

  function getcourses() {
    fetch(value1.value1 + "admin/viewCourses")
      .then((response) => response.json())
      .then((p) => {
        setData(p);
        setNo_courses(p.length);
        console.log("length of courses array :" + p.length);
      });
    console.log("inside getcourses");
    //console.log(p.length);
  }
  useEffect(() => {
    //getcourses();
    getallreviews();
  }, [no_courses]);

  //function getno_courses() {}

  function getallreviews() {
    var star = 0;
    console.log("no of courses " + no_courses);
    for (var i = 1; i <= no_courses; i++) {
      fetch(value1.value1 + `getReviewsByCourseId/${i}`)
        .then((response) => response.json())
        .then((p) => {
          console.log(p);
          console.log("inside getallreview");
          setReviewarr((prev) => [...prev, p]);
          // console.log("review arr " + reviewarr[0]);
          // reviewarr[0].map((x) => {
          //   console.log("insie map" + x);
          //   //return Number(x.starRating);
          // });
          //star = getreview(i, p);
          //console.log("star recieved in getallreview: " + star);
          //setRateValue(star);
          //return star;
        });
    }
    //star = getreview(1);

    // console.log("star after getreview called: " + star);
    // return star;
  }
  function getreview(courseid) {
    console.log("inside getreview");
    console.log("courseid " + courseid);
    // console.log("arr recieved in getreview : " + arr);

    var sum = 0;
    var final_sum = [];
    console.log("review 0 index: ");
    console.log(reviewarr[0]);
    final_sum = reviewarr[0].map((x) => {
      console.log(x.starRating);
      return Number(x.starRating);
    });
    // var len = reviewarr[courseid].length;
    // while (len > 0) {
    // final_sum = reviewarr[courseid].map((x) => {
    //   console.log(x.starRating);
    //   return Number(x.starRating);
    // });
    //   len--;
    // }
    // for (var i = 0; i < reviewarr.length; i++) {
    //   sum = sum + reviewarr[i].starRating;
    // }
    // var star = ((sum / (reviewarr.length * 5)) * 10) / 2;
    // console.log("final rate is " + star);
    // let final_sum = arr.map((x) => {
    //   console.log(x.starRating);
    //   return Number(x.starRating);
    // });
    console.log(final_sum);
    // for (var i = 0; i < final_sum.length; i++) {
    //   sum = sum + final_sum;
    // }
    sum = final_sum.reduce((a, b) => a + b, 0);
    console.log(sum);
    var star = ((sum / (reviewarr[courseid].length * 5)) * 10) / 2;
    console.log("star in getreview: " + star);
    return star;
  }

  // return reviewarr.filter((x) => {
  //   if (x.courseId != courseid) return x.starRating;
  // });

  return (
    <div>
      <HeaderStudent />
      <CourseSearchFilter />

      <div className="course-card-container">
        {data.map((datas) => (
          <div key={datas.courseId} className="card">
            <div className="container">
              {/* <Grid container   item xs={12} sm={4} md={12}> */}
              {/* <Grid  container className="rowgrid"  rowSpacing={1} columnSpacing={{xs:1,sm:2,md:3}}> */}
              <Grid
                container
                columnSpacing="3"
                item
                xs={12}
                sm={4}
                md={12}
                //className="course-card-row"
              >
                <Grid className="gridelement">
                  <p>course Id : {datas.courseId} </p>
                </Grid>

                <Grid className="gridelement">
                  <p>Course Name :{<strong>{datas.courseName}</strong>}</p>
                </Grid>

                <Grid className="gridelement">
                  <p> Course Duration : {datas.courseDuration}</p>
                </Grid>
                <Grid className="gridelement">
                  <p>Course Timing : {datas.courseTiming}</p>
                </Grid>
              </Grid>

              <Grid
                //className="course-card-row"
                container
                className="rowgrid"
                item
                xs={12}
                sm={4}
                md={12}
              >
                {/* <Grid className="gridelement">
                  <p>Course Timing : {datas.courseTiming}</p>
                </Grid> */}

                <Grid className="gridelement">
                  <p>Students enrolled : {datas.courseStudentCount}</p>
                </Grid>

                <Grid className="gridelement">
                  <p>Academic year : {datas.courseAcademicYear}</p>
                </Grid>
                <Grid className="gridelement">
                  <p>Percentage Required : {datas.courseRequiredPercentage}</p>
                </Grid>
                <Grid className="gridelement">
                  <p>Course Description : {datas.courseDescription}</p>
                </Grid>
              </Grid>

              <Grid
                container
                className="rowgrid grid-bottom-row"
                item
                xs={12}
                sm={4}
                md={12}
              >
                <Grid className="gridelement">
                  <p>Institute Name : {datas.instituteName}</p>
                </Grid>
                <div className="course-card-btns-box">
                  <Link
                    to="/user/EnrollCourse"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<AddBox />}
                      style={{ marginLeft: "100px", zIndex: "-1" }}
                    >
                      Enroll
                    </Button>
                  </Link>
                  <Link
                    to="/user/ReviewForm"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginLeft: "100px",
                      marginRight: "50px",
                      // zIndex: "-1",
                    }}
                  >
                    <Button
                      className="zindex"
                      startIcon={<RateReviewIcon />}
                      // style={{ zIndex: "-1" }}

                      variant="outlined"

                      // style={{ marginLeft: "10px", zIndex: "-1" }}
                    >
                      Add Reviews
                    </Button>
                  </Link>
                  {/* <div>
                <box> */}
                  {/* <Typography>Overall Rating</Typography> */}
                  {/* <Rating */}
                  {/* //name="read-only"
                    // value={getreview(datas.courseId)}
                    //value={2}
                    //readOnly
                  /> */}
                  {/* <Button>Review</Button> */}
                  {/* </box>
              </div> */}
                  {/* <GetRating courseid={1} /> */}
                  {/* <div className="addreview">
                <div> */}
                  {/* <Typography> Rate & Review</Typography>
                  <Rating */}
                  {/* // name="simple-controlled"
                    // value={value}
                    // onChange={(event, newValue) => { */}
                  {/* //   setRateValue(newValue);
                    // }} */}
                  {/* /> */}
                  {/* </div>
                <div className="review-des">
                  <textarea className="review-des-text"></textarea>
                </div>
              </div> */}
                </div>
              </Grid>

              <Grid
                container
                className="rowgrid"
                item
                xs={12}
                sm={4}
                md={12}
              ></Grid>
            </div>

            <hr></hr>
            <div>
              <p>Reviews</p>
              <Review
                className="zindex"
                value1={value1}
                courseid={datas.courseId}
                style={{ zIndex: -1 }}
              />
              {/* {expandReview ? <Review value1={value1} courseid={1} /> : ""} */}
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Course;
