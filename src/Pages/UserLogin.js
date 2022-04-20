/*
import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
//import { Redirect } from 'react-router-dom'


const p={
    fontSize: "10px",
    marginTop:"5px",
    marginBottom:"0px",
    fontStyle:"italic",
    fontWeight: "bold",
    color:"black"
    
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
    height:"600px",
    width: "350px"
    
}
const text={
  border: "1px solid black",
  borderRadius: "25px",textAlign:'center',
  backgroundColor:'#F8EFF4'
}


const UserLogin = ({history}) => {
 const[usear,setUsear]=useState({
        email:"",userPassword:""
    })
   
     let name,value 
    const handleInputs =(e) =>{
        console.log(e);
         name=e.target.name;
         value=e.target.value;
    
         setUsear({...usear,[name]:value}) 
    }
        
     
    const re=async(event) =>{
       
        event.preventDefault();
        
     const{email,userPassword} =usear 
       if(email && userPassword){
            
     /*  axios.post("http://localhost:8080/user/login",usear)
        .then(
            res=>{ //alert(res.data.message)
                let a=[]
                a =JSON.stringify(res.data.user)
               if(res.data.user.userId){
                 //  auth.login(()=>{
                     //  history.push('user/HomepageStudent')
                     //<Navigate to="user/HomepageStudent" />
                   //  window.location.href="user/HomepageStudent"
                 //  })

                 localStorage.setItem('user','res.data.user.userId')
                 window.location.href="user/HomepageStudent"*/
               

/*
                 
                  //fetch("http://localhost:8080/user/login")
                  .then((response)=>response.json()
                  
                  )
                  .then((p) => {
                    let a=[]
                    a =JSON.stringify(p)
                  // a=JSON.parse(p);
                         // alert(p.userId)
                  if(p.role.equals("ROLE_student")){
                    
                    //  auth.login(()=>{
                        //  history.push('user/HomepageStudent')
                        //<Navigate to="user/HomepageStudent" />
                      //  window.location.href="user/HomepageStudent"
                    //  })
   
                    localStorage.setItem('user','p')
                    window.location.href="user/HomepageStudent"
                  }


                  else{
                    alert(p.Error)
                  }
                     
                }
                  );
                
                   
              

                }
              /*  else if(res.data.user.use==="Admin") {
                   // auth.login(()=>{
                        //  history.push('user/HomepageStudent')
                       // <Navigate to="user/HomepageStudent" />
                    //    window.location.href="admin/DisplayUser"
                    //  })
                    localStorage.setItem('admin','res.data.user')
                    window.location.href="admin/ViewInstitute"

                }*/
                          
            
       /* 
         

        
        else
        {
            alert("Email or Passworld can't be empty"
            )
        }
         
    }
   
 
   

  return ( 
      
    <div className='first' style={di} >
         <h1 style={heading}> PG Admission  </h1>  

          <h1 style={heading}>User Login </h1><br></br>
          <h1 style={p} >  For admin login:</h1>
          
          <a href="/Login"  id="AdminLink" style={h1} > Admin Login</a> <br></br>
      <form className='second'>
         
          <input type="text" id="email" 
                placeholder="Enter email" name='email'  value={usear.email} onChange= {handleInputs}  autoComplete="off" style={text} required/>
                <br></br>
             < input type="password" name='userPassword' value={usear.userPassword} onChange= {handleInputs}  id="password" style={text} autoComplete='off'  placeholder="Enter passworld"  required/> 
          
            <br></br>
          
          <input type="button"  id="loginButton" onClick={re} value="Login" style={butt}/>
          <h1 style={p} >  New User/admin?</h1>
          <a href="/UserRegister"  id="signupLink" style={h1} > Sign up</a>  
          
      </form>
    </div>
  
  )
}

export default  UserLogin*/
