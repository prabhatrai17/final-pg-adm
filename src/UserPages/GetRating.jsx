import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import  from '../Components/InstituteCard';
import Rating from "@mui/material/Rating";

function GetRating({ value1, courseid }) {
  console.log("recieved course id :");
  console.log(courseid);
  const [data, setData] = useState([]);
  const [no_courses, setNo_courses] = useState(0);
  const [flag, setFlag] = useState(false);
  const [reviewarr, setReviewarr] = useState([]);
  const [ratevalue, setRateValue] = React.useState(0);

  // useEffect(() => {
  //   getcourses();
  //   //getallreviews();
  // }, []);

  // useEffect(() => {
  //   return ratevalue;
  // }, [ratevalue]);

  // function getcourses() {
  //   console.log("inside getcourses");
  //   fetch(value1 + "admin/viewCourses")
  //     .then((response) => response.json())
  //     .then((p) => {
  //       setData(p);
  //       setNo_courses(p.length);
  //       console.log("length of courses array :" + p.length);
  //     });

  //   //console.log(p.length);
  // }
  useEffect(async () => {
    //getcourses();
    await getallreviews();
    getreviews();
  }, []);

  //function getno_courses() {}

  function getallreviews() {
    var star = 0;
    console.log("no of courses " + no_courses);
    for (var i = 1; i <= 6; i++) {
      fetch(value1 + `getReviewsByCourseId/${i}`)
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
    // setFlag((flag) => !flag);
    // star = getreview(courseid);

    // console.log("star after getreview called: " + star);
    // return star;
  }

  // useEffect(() => {
  //   //getcourses();
  //   getreviews(courseid);
  // }, [flag]);
  function getreviews() {
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
    setRateValue(star);
    // return star;
  }

  return (
    <div>
      <h1>This is all reviews for this course</h1>
      <div>
        <box>
          <Typography>Overall Rating</Typography>
          <Rating
            name="read-only"
            // value={getreview(datas.courseId)}
            value={ratevalue == 0 ? 0 : ratevalue}
            readOnly
          />
          {/* <Button>Review</Button> */}
        </box>
      </div>
    </div>
  );
}
export default GetRating;
