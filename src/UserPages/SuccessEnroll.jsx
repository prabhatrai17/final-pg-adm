import { Button, Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStudent from '../Components/HeaderStudent';
import "./SuccessEnroll.css"

function SuccessEnroll(value1) {
   
    return (
        <div >
<HeaderStudent/>
          <Card  style={{width:"50%",marginTop:"10%",marginLeft:"20%",padding:"40px",textAlign:"center"}}>
          <div>  you have been successfully enrolled in the course.</div>
            <div>we will contact you in your personal mail as soon as</div>
            <div>your credentials are verified</div>
            <Link to="/user/ViewCourse"  style={{color:"white", textDecoration:"none"} } underline='none'>
            <Button  style={{marginTop:"5%"}} variant='outlined' color='error'>Back</Button>
            </Link>
            

            </Card>
          
        </div>
        
    );
}

export default SuccessEnroll;