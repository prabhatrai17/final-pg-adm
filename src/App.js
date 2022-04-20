import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import InstituteCard from './Components/InstituteCard';
import HomePage from "./Components/HomePage";
import DisplayUser from "./AdminPages/DisplayUser";
import EditUser from "./AdminPages/EditUser";
import AddUser from "./AdminPages/AddUser";
import ErrorPage from "./AdminPages/ErrorPage";
import AddAcademy from "./AdminPages/AddAcademy";
import { render } from "react-dom";
// import Card from './Components/Card';
// import HeaderStudent from './Components/HeaderStudent';

import EditCourse from "./AdminPages/EditCourse";
// import AddCourse from './Pages/AddCourse';
import ViewCourse from "./AdminPages/ViewCourse";
import StudentInstitute from "./UserPages/StudentInstitute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
  Navigate,
} from "react-router-dom";
import AddCourse from "./AdminPages/AddCourse";
import HeaderStudent from "./Components/HeaderStudent";
import Course from "./UserPages/Course";
import EnrollPage from "./UserPages/EnrollPage";
import LoginForm from "./Pages/LoginForm";

import Regis from "./Pages/regis";
// import InstituteCard from './Components/InstituteCard';
import EditAcademy from "./AdminPages/EditAcademy";
import Card from "./Components/Card";
import Review from "./UserPages/Review";
import EnrolledCourse from "./UserPages/EnrolledCourse";
import { Component } from "react";
import PrivateRoute from "./Pages/Private.js";
import AdminPrivateRoute from "./Pages/adminPrivate";
import ReviewAdmin from "./AdminPages/ReviewAdmin";
import SuccessEnroll from "./UserPages/SuccessEnroll";
import ReviewForm from "./UserPages/ReviewForm";
import UserLogin from "./Pages/UserLogin";
import UserRegis from "./Pages/Userregis";
import Redirect from "./Pages/Redirect";
function App(props) {
  let { id } = useParams();

  const value1 = "http://localhost:8080/";

  return (
    <div>
      {/* <Footer /> */}
      {/* <Header /> */}
      {/* <InstituteCard />  */}
      {/* <HomePage /> */}
      {/* <EditUser /> */}
      {/* <DisplayUser /> */}
      {/* <AddUser /> */}
      {/* render( */}

      {/* ); */}

      {/* <AddAcademy/> */}
      {/* <ViewCourse /> */}
      {/* <AddCourse /> */}
      {/* <EditCourse/> */}
      {/* <ViewCours/> */}
      {/* <HeaderStudent/>
        <StudentInstitute/>
        
        
        // <Card/>
       */}
      {/* <EnrolledCourse/> */}
      {/* <EnrollPage/> */}
      {/* <Card/> */}
      {/* <Card/> */}
      {/* <Review/> */}
      {/* <SuccessEnroll/> */}
      {/* <ReviewForm/> */}
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/Login" exact element={<LoginForm value1={value1} />} />

          <Route path="/Register" exact element={<Regis value1={value1} />} />
          {/* <Route path="/" element={<HomePage/>}/>
         
         < Route path="user/HomepageStudent"  element={<PrivateRoute/>}>
         */}

          <Route path="/" element={<PrivateRoute />}>
            <Route
              path="user/HomepageStudent"
              element={<StudentInstitute value1={value1} />}
            />

            <Route
              path="user/ViewCourse"
              element={<Course value1={value1} />}
            />
            <Route
              path="user/EnrollCourse"
              element={<EnrollPage value1={value1} />}
            />
            <Route
              path="user/EnrolledCourses"
              element={<EnrolledCourse value1={value1} />}
            />

            <Route path="user/Review" element={<Review value1={value1} />} />
            <Route
              path="user/Success"
              element={<SuccessEnroll value1={value1} />}
            />
            <Route
              path="user/ReviewForm"
              element={<ReviewForm value1={value1} />}
            />
          </Route>

          <Route path="/" element={<AdminPrivateRoute />}>
            <Route
              path="admin/ViewInstitute"
              element={<HomePage value1={value1} />}
            />

            <Route
              path="admin/DisplayUser"
              element={<DisplayUser value1={value1} />}
            />

            <Route
              path="admin/addAcademy"
              element={<AddAcademy value1={value1} />}
            ></Route>
            <Route
              path="admin/ViewCourse"
              element={<ViewCourse value1={value1} />}
            ></Route>
            <Route
              path="admin/AddUser"
              element={<AddUser value1={value1} />}
            ></Route>
            <Route
              path="admin/Reviews"
              element={<ReviewAdmin value1={value1} />}
            ></Route>

            <Route
              path="admin/AddCourses"
              element={<AddCourse value1={value1} />}
            >
              {/* <Route path="/adduser" element={<AddUser/>} ></Route> */}
            </Route>
            <Route
              path="admin/Edit"
              element={<EditAcademy value1={value1} />}
            />
            <Route
              path="admin/EditCourses"
              element={<EditCourse value1={value1} />}
            ></Route>
            <Route
              // path="admin/EditUser/:id"
              path="admin/EditUser"
              element={<EditUser value1={value1} />}
            ></Route>
          </Route>

          <Route path="*" element={<Redirect />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
