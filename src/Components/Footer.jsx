import Typography from '@mui/material/Typography';



function Footer() {
    const current =new Date();
    const date=`${current.getFullYear()}`;

    let ab={
      paddingTop:"15px",
      paddingBottom:"15px",
      FontSize:"30px",
      FontWeight:"bold"
    };
    let body1={
    //  backgroundColor:"#ffcccc",
    backgroundColor:"rgba(245, 228, 238, 0.856)",
     marginBottom:"1px",
     marginTop:"20px"
    };
    return (
      <div >
        <div style={body1} >
      <Typography style={ab} variant="body2" color="text.secondary" align="center" padding={6} fontFamily="ariel" FontWeight="bold" fontStyle={{fontWeight:"bold",fontSize:"20px"}}>
        {'Copyright © '}
        B1JR37 {date}      
      </Typography>
      </div>
      
                
      </div>
    );
  }
  export default Footer;