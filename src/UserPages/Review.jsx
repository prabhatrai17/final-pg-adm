import { useState, React, useEffect } from "react";
import HeaderStudent from "../Components/HeaderStudent";
import "./Review.css";
import Rating from "@mui/material/Rating";

function Review({ value1, courseid }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getusersreview();
  }, []);

  function getusersreview() {
    fetch(value1.value1 + `getReviewsByCourseId/${courseid}`)
      .then((response) => response.json())
      .then((p) => setData(p));
  }
  return (
    <>
      {/* <HeaderStudent /> */}
      <div className="review-card-container">
        {data.map((datas) => (
          <div key={datas.courseId} className="reviewcard">
            {/* <img src="img_avatar.png"  style={{width:"100%"}}/> */}

            <div className="container">
              <h4>
                {/* <b>by user {datas.userId}</b> */}
                <b>by user {datas.userId} </b>
              </h4>
              <p> {datas.message}</p>
              <p>
                {/* Rating {datas.starRating} */}
                <Rating
                  className="zindex"
                  name="read-only"
                  // value={getreview(datas.courseId)}
                  value={datas.starRating}
                  readOnly
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Review;
