import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const adminuseAuth=()=>{
    const auth=localStorage.getItem('admin')
  if(auth){
      return true
  }
  else{
      return false
  }
}

const AdminPrivateRoute = () => {
    
     // determine if authorized, from context or however you're doing it
   // alert(auth.isAuthenticated())
   
    return adminuseAuth() ? <Outlet /> : <Navigate to="/Login" />;
}
export default AdminPrivateRoute