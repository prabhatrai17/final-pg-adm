import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';



const Redirect = () => {
    
     // determine if authorized, from context or however you're doing it
   // alert(auth.isAuthenticated())
   
    return  <Navigate to="/Login" />;
}
export default Redirect