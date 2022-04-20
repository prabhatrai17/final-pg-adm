import Footer from './Footer';
import Header from './Header';
// import InstituteCard from './InstituteCard';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import "./HomePage.css";
import {Link,Outlet,} from  "react-router-dom";
import Add from '@mui/icons-material/Add';
import CourseSearchFilter from './CourseSearchFilter';
import Card from './Card';
import Course from '../UserPages/Course';

function HomePage(){
    let grida={
      width:"350px",
      height:"40px",
      position:"relative",
      left:"200px"

    }

    let search={
        marginTop:"40px",
        marginBottom:"60px",
        paddingBottom:"60px",
        padding:"20px" ,
        width :"600px",
        position:"relative",
        left:"310px"
        // width:"100%"
    };
    let button={
       width:"100px",
       position:"relative",
       top:"24px"
    }
    // let addbutton={
    //     width:"170px",
    //     height:"40px",
    //    position:"relative",
    //    left:"360px",
    //    top:"24px"

    // }
    
    return(
        <div>
            {/* <Grid><header><Header /> </header></Grid> */}

            
            {/* <form style={search}>
            <input style={search} type="text" className="Searchspace" placeholder='Type here to search'></input>
            <Button style={button} variant="contained"  color="primary"> Search</Button>
            </form> */}

{/* <CourseSearchFilter firstsearchbar="Location" secondsearchbar="Institute" thirdsearchbar="Course"/> */}

<Header/>

<div className="course-search-and-filter">
      <div className="course-search">
        <input
          className="course-search-input"
          type="text"
          name="course"
          placeholder="Search Course"
        ></input>
        <Button variant='outlined' id="searchCourse" className="btn">
          Search
        </Button>
      </div>
      <div className="course-filter">
      <div className='filter1'>Filter By</div>
        
        <Button variant="outlined" > Location</Button>
        <Button variant="outlined" > Institute</Button>
        <Button variant="outlined" > Course</Button>
      </div>
    </div>


            {/* <Grid  container  rowSpacing={1} columnSpacing={{xs:1,sm:2,md:3}}> */}
            {/* <Grid  id="adminInstituteGrid1" item xs={12} md={4}> */}
              
              <Card/>
                {/* </Grid> */}
                {/* <Grid  id="adminInstituteGrid2" item xs={12} md={4}>
               <Card/>
                </Grid>
                <Grid  id="adminInstituteGrid3" item xs={12} md={4}>
               <Card/>
                </Grid>  */}
                 {/* </Grid> */}
            
                <div className='btnadd'>
<Link   to="/admin/addAcademy" style={{color:"white",textDecoration:"none"}} >
<Button  variant="contained" style={{margin:"5px"}} startIcon={<Add />} color="primary">Add Institute </Button> 
  </Link>
  </div>
            

           <Outlet />
        </div>
    );
   
}
export default HomePage;