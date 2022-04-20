import React, { Component } from "react";
import "./CourseSearchFilter.css";
import Button from "@mui/material/Button";

function CourseSearchFilter(props) {
  return (
    <div className="course-search-and-filter">
      <div className="course-search">
        <input
          className="course-search-input"
          type="text"
          name="course"
          placeholder="Search Course"
        ></input>
        <Button variant="outlined" id="searchCourse" className="btn">
          Search
        </Button>
      </div>
      <div className="course-filter">
        <div className="filter1">Filter By</div>
        {/*
      <Button variant="outlined" className="course-filter-elem"> StudentId</Button>
  <Button variant="outlined" className="course-filter-elem"> Student Name</Button> */}
        <Button variant="outlined" className="course-filter-elem">
          {" "}
          Institute
        </Button>
      </div>
    </div>
  );
}

export default CourseSearchFilter;

// class CourseSearchFilter extends Component {
//     render() {
//         return (
//             <div className="course-search-and-filter">
//       <div className="course-search">
//         <input
//           className="course-search-input"
//           type="text"
//           name="course"
//           placeholder="Search Course"
//         ></input>
//         <Button variant='outlined' id="searchCourse" className="btn">
//           Search
//         </Button>
//       </div>
//       <div className="course-filter">
//       <div className='filter1'>Filter By</div>

//         <Button variant="outlined" className="course-filter-elem"> StudentId</Button>
//         <Button variant="outlined" className="course-filter-elem"> Student Name</Button>
//         <Button variant="outlined" className="course-filter-elem"> Course</Button>

//       </div>
//     </div>
//         );
//     }
// }

// export default CourseSearchFilter;
