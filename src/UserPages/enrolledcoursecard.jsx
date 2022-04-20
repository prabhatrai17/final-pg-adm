import React from "react";
import Grid from "@mui/material/Grid";
import AddBox from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

function EnrolledCourseCard({ enrolleddata }) {
  return (
    <div>
      {enrolleddata.map((x) => (
        <div className="card">
          <div className="container">
            <Grid container className="rowgrid" item xs={12} sm={4} md={12}>
              <Grid className="gridelement">
                <p>First name :{<strong> {x.firstName} </strong>}</p>
              </Grid>
              <Grid className="gridelement">
                <p>Last Name :{<strong>{x.lastName} </strong>} </p>
              </Grid>
              <Grid className="gridelement">
                <p> Email Id : {<strong>{x.email} </strong>}</p>
              </Grid>
            </Grid>

            <Grid container className="rowgrid" item xs={12} sm={4} md={12}>
              <Grid className="gridelement">
                <p>course name :{x.courseName}</p>
              </Grid>
              <Grid className="gridelement">
                <p>Course Id : {x.courseId}</p>
              </Grid>
              <Grid className="gridelement">
                <p> Course Duration :{x.courseDuration}</p>
              </Grid>
            </Grid>

            <Grid container className="rowgrid" item xs={12} sm={4} md={12}>
              <Grid className="gridelement">
                <p>admissionId:{x.admissionId}</p>
              </Grid>
              <Grid className="gridelement">
                <p>Course Available timing : {x.courseTiming}</p>
              </Grid>
              <Grid className="gridelement">
                <p>Institute Name : {x.instituteName}</p>
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
        </div>
      ))}
    </div>
  );
}
export default EnrolledCourseCard;
