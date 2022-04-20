import "./Header.css";
import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link'
// import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';


// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import "./Header.css";
import Account from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import { sizeWidth } from '@mui/system';


import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import { NotificationImportant } from "@mui/icons-material";


function Header() {
    // 

    let appbar1={
      padding:"0px",
      backgroundColor:"#A40865",
      bottom:"18px",
      marginTop:"0px",   
    };
    let toolbar1={
      padding:"0px",
      color:"white",
      width:"45%"  
    };

    let grid1={
     marginLeft:"100px", 
     fontSize:"25px",
     paddingTop:"70px"
    };
    let gridheading={
      marginLeft:"100px",
      fontSize:"35px",
    textDecoration:"solid",
    fontWeight:"bold"
    }


    return (
       <div>
         

<header className="container-nav">
      <div className="nav-logo">
        <span> PG Admission</span>
      </div>
      <div className="nav">
        <div className="nav-logout">
          <Logout
          
          onClick={()=>{
            localStorage.removeItem('user');
            localStorage.removeItem('admin');
            window.location.href="/Login"
        }}

          sx={{ fontSize: 35 }} /> <div>logout</div>
          
        </div>
        <div className="nav-profile">
          {/* <Account sx={{ fontSize: 35 }} /> */}
         
          <NotificationImportant   sx={{ fontSize: 35 }} />
          <div>User Id:{localStorage.getItem('admin') }</div> 
        </div>
      </div>
    </header>




<AppBar style={appbar1}  position="static">
      <div  className="container-below-nav  shed">
        <Toolbar  className="options-below-nav"  style={toolbar1}   sx={{width:"100%",maxWidth:"600",mx:"auto"}}>
        

          <grid container rowSpacing={1} columnSpacing={{xs:2,sm:2,md:3}} >
            
           
            
            <grid item xs={4} md={4} style={gridheading}>
            <Link to="/admin/ViewInstitute"  style={{color:"white", textDecoration:"none"} } underline='none'>
              <IconButton className="options-below-nav-items options-institute" edge="start" ariel-label="menu" sx={{mr:2}}>Institute</IconButton>
              </Link>
              </grid>
            <grid item xs={4} md={4}  style={grid1} >
            <Link to="/admin/ViewCourse"  style={{color:"white", textDecoration:"none"} } underline='none'>
              <IconButton className="options-below-nav-items options-courses" edge="start"  ariel-label="menu" sx={{mr:2}}>Course</IconButton>
              </Link>
              </grid>
            <grid item xs={4} md={4} style={grid1}  >
              <Link to="/admin/DisplayUser" style={{color:"white",textDecoration:"none"}}  >
                <IconButton className="options-below-nav-items options-student" edge="start"   ariel-label="menu" sx={{mr:2}}>Student
                </IconButton>
                 </Link>
            </grid>
           
           {/* <grid item xs={4} md={4} style={grid1}><IconButton edge="start" color="inherit" ariel-label="menu" sx={{mr:2}}>
           <Link to=""  style={{color:"white"}} underline='none'>
              <Account style={icon}  className='icon1' style={style1}/> 
          </Link>
             </IconButton>
             </grid> */}
            
             {/* <grid item xs={4} md={4} style={grid1}><Link to="" style={{color:"white"}} style={{textDecoration:"none"}} target={"_blank"}  id="logout" underline='none'><IconButton edge="start" style={{color:"white"}} ariel-label="menu" sx={{mr:2}}>
             Logout
               </IconButton>
               </Link>
               </grid> */}
           
           

          </grid>
          
          
        </Toolbar>
        </div>
      </AppBar>
         <div>

       
        
      </div>
      {/* <Outlet /> */}
      
        </div>
    );
  }
  export default Header;