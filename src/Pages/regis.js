import React, { useState } from 'react'
//import { Redirect } from 'react-router-dom'
import './regis.css'
//import { useHistory } from 'react-router-dom';
import axios from 'axios'

 const labe={
  backgroundColor:'#F8EFF4',
  borderRadius:'20px',
  height:'30px',
  width:'250px',
  textAlign:'center',
  border:'1px solid black'
 }
  const p={
    fontSize: "10px",
    margin:"5px",
    
}
const h1={
    fontSize: "15px",
    color: "#a40865"
}
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
} 
const butt={
    
    backgroundColor: "#a40865",
    color:"white",
    cursor:'pointer'
}

const di={
    height:"800px",
    
    
    
}
const text={
    border: "1px solid black",
    borderRadius: "25px",textAlign:'center',
    backgroundColor:'#F8EFF4'
}

const Regis = (value1) => {
 //let history=useHistory()
 

  const[usear,setUsear]=useState({
   use:"", email:"",userName:"",userMobileNumber:"",userPassword:"",cpassworld:""
});
  let name,value;
const handleInputs =(e) =>{
    console.log(e);
     name=e.target.name;
     value=e.target.value;
     if(name==="userMobileNumber")
     {
       var num=/[^0-9]/gi;
       value=e.target.value.replace(num,"")
      
     }
     if(name==="userName")
     {
       var letter=/^[a-zA-Z]*$/
       if(!e.target.value.match(letter))
       value=""
     }

     setUsear({...usear,[name]:value}) 
}
 
  
    const re = async(event) => {
        event.preventDefault();
        const{use,email,userName,userMobileNumber,userPassword,cpassworld} =usear

      
       if( use &&email && userName &&userMobileNumber && userPassword &&cpassworld &&(userPassword===cpassworld) &&userMobileNumber.length===10 ){
       // history.push('/user/login')
       
      /* axios.post('http:/8080/admin/signup',usear)
         .then(res=>{
            // alert(res.data.message)
           //  history.push('/Login')
           window.location.href="/Login"
         })*/
          
         

         if(use==="Admin"){
         fetch( value1.value1+"admin/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(usear)
           
      
        })
        window.location.href="/Login"
      }
      else if(use==="User"){
        alert(value1.value1)

        fetch(value1.value1+"user/signup",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(usear)
         
    
      })
      window.location.href="/Login"
 
      
      }
      
    }
    else alert('invalid input')

    }

  return (
    
      <div className='first' style={di} >
      <h1 style={heading}>  PG Admission  Registration </h1> <br></br>
      
        <form className='second'>
             <label  >
                 <input list="adminUsear" name='use' placeholder="Enter admin/user"  value={usear.use} onChange= {handleInputs} style={text}/>
             </label>
             <datalist id="adminUsear" >
                 <option value="Admin" />
                  <option value="User"/>
             </datalist>
  <br></br> 
                       
                    {/*   <h1 style={p} >  For User Signin:</h1>
          
  <a href="/UserRegister"  id="AdminLink" style={h1} > User Signin</a> <br></br> */}
                   
             <input type="text" name='email' id="email" value={usear.email} onChange= {handleInputs}
             placeholder="Enter email" size="50px" width="100px" style={text}  required/><br></br>
             <input type="text" id="username" name='userName' value={usear.userName} onChange= {handleInputs}
             placeholder="Enter Usearname" size="50px" width="100px"  style={text}  required/><br></br>
             <input type="text" id="mobileNumber" name='userMobileNumber' value={usear.userMobileNumber} onChange= {handleInputs}
              maxlength="10" placeholder="Enter mobileNumber" size="50px" width="100px" style={text}    required/><br></br>
             <input type="password" id="password" name='userPassword' value={usear.userPassword} onChange= {handleInputs}
             placeholder="Enter password" size="50px" width="100px" style={text}   required/><br></br>
             <input type="password" id="confirmPassword" name='cpassworld' value={usear.cpassworld} onChange= {handleInputs}
             placeholder="Confirm password" size="50px" width="100px" style={text}   required/><br></br>
             <input type="button" id="submitButton"  
              value="Submit" onClick={re} style={butt}/>
               
            <p style={p}>   Already a user?  </p>
            <a href="/Login" style={h1} id="signinLink" >Login</a> 
              
         </form>
      </div>
  )
}

export default Regis;







