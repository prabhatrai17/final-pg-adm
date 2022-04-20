import { useState,React,useEffect } from "react";
import Header from '../Components/Header';
import "../UserPages/Review.css"



function ReviewAdmin({courseId},{value1}) {
  
const [data,setData]=useState([]);

useEffect(()=>{
 getusers();
},[]);

function getusers(){
  fetch(value1.value1+`getReviewsByCourseId/${courseId}`)
  .then((response)=>response.json())
  .then((p) => setData(p)
       
  );
}
    return (
        <div>
            <Header/>
            {data.map(datas=>(
            <div 
            key={datas.courseId}
            className="card">
  {/* <img src="img_avatar.png"  style={{width:"100%"}}/> */}
 
  <div   className="container">
    <h4><b>{datas.userId}</b></h4> 
    <p>{datas.message}</p> 
    <p>{datas.starRating}</p>
  </div>
</div>
             ))} 
        </div>
    );
}

export default ReviewAdmin;