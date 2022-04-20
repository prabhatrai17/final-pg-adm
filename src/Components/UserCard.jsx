// import "./Card.css";

// import React from 'react';
// import { Button } from "@mui/material";
// import { Delete, Edit, Reviews, Search } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// function UserCard(props) {
//     return (
//         <div>
//            <div className="card">
//   <img src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
//    style={{width:"100%"}}/>
//   <div className="container">
//     <h4><b>R.k Institute of Technology</b></h4> 
//     <p>Premier institute in engineering</p> 
//   </div>
//   <Link to="/user/Review"  style={{color:"white", textDecoration:"none"} } underline='none'>
//   <div> <Button style={{marginLeft:"60px",marginBottom:"10px"}} startIcon={<Reviews/>}>Reviews</Button></div>
//   </Link>
//   {/* <div>
//   <Link to="/admin/Edit"  style={{color:"white", textDecoration:"none"} } underline='none'>
//       <Button startIcon={<Edit/>} variant="outlined">Edit</Button>
//       </Link>
     
//       <Button startIcon={<Delete/>} style={{marginLeft:"30px"}} variant="outlined">Delete</Button>
//   </div> */}
// </div>

           
//         </div>
//     );
// }

// export default UserCard;




import "./Card.css";

import { useState,React,useEffect } from "react";
import { Button } from "@mui/material";
import { Delete, Edit, Reviews, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

function UserCard(props) {


  const [data,setData]=useState([]);

  useEffect(()=>{
   getInstitute();
  },[]);
  
  function getInstitute(){
    fetch("http://localhost:8080/admin/viewInstitutes")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }
  

  // function deleteInstitute(instituteId)
  // {
  //   // alert(id)
  //   fetch(`http://localhost:8080/admin/deleteInstitute/${instituteId}`,{
  //     method:'DELETE'
  //   }).then((response)=>{
  //     response.json().then((resp)=>{
  //       console.warn()
  //       getInstitute();
  //     })
       
    
  //   })
  // }
  
  function deleteInstitute(instituteId)
  {
    // alert(id)
    fetch(`http://localhost:8080/admin/deleteInstitute/${instituteId}`,{
      method:'DELETE'
    }).then((response)=>{
      response.json().then((resp)=>{
        console.warn()
        getInstitute();
      })
       
    
    })
  }
  










    return (
        <div>
           {data.map(datas=>(
           <Grid  container  columnSpacing="4" item xs={12} sm={3} md={12}
            key={datas.instituteId} 
           className="card" style={{marginTop:"10px"}}>
             <Grid style={{marginLeft:"20px"}}>
            
                  <img src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
                   style={{width:"100%",height:"175px"}}/>
             </Grid>           
                  <Grid className="container column">
                      <h3><b>{datas.instituteName}(id:{datas.instituteId})</b></h3> 
                     
    </Grid>
    <Grid  style={{marginLeft:"15%"}} className="column container desc">
    <h3 >Details</h3>
      
    <p>Address : {datas.instituteCity}</p>
   
   {/* <p className="info">{datas.instituteState}</p>    url commented */}
   <p className="info">MOBILE NO : {datas.instituteMobile}</p>
   <p className="info">EMAIL : {datas.instituteEmail}</p>
   <p className="info">NIRF Rank : {datas.nirfRank}</p>  
    </Grid>
                  







  <Grid style={{marginLeft:"15%"}}>
  
  <div  > 
  {/* <Link to="/admin/Reviews"  style={{color:"white", textDecoration:"none"} } underline='none'>
    <Button style={{marginLeft:"60px",marginBottom:"10px",zIndex:-1}} startIcon={<Reviews/>}>Reviews</Button>
    </Link>
    </div>
 
  <div>
  <Link to="/admin/Edit"  style={{marginLeft:"60px", marginBottom:"10px",color:"white", textDecoration:"none"} } underline='none'>
      <button  style={{zIndex:-1}} startIcon={<Edit/>} variant="outlined">Edit</button>
      </Link>
     
      <button startIcon={<Delete/>} 
       onClick={()=>deleteInstitute(datas.instituteId)}
      style={{marginLeft:"30px",zIndex:-1}} variant="outlined">Delete</button> */}

<h3 style={{fontSize:"15px",marginTop:"16px",width:"20%"}} className="info">Description</h3>
    <p style={{fontSize:"13px"}} className="info">{datas.instituteDescription}</p> 
  </div>

  </Grid>
</Grid>

 ))}        
        </div>
    );
}

export default UserCard;