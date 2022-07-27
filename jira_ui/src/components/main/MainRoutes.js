import React from "react";
import Box from '@mui/material/Box';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import MainPage from "../../customer_view/layout/MainPage";
import HomeScreen from "../../homepage/Homescreen";
import Protected from "../../Protected";
import AllRequest from "../../allrequest/AllRequest";
import Requests from "../../allrequest/Requests";
import ProfileMain from "../../user/ProfileMain";

  const MainRoutes = () => {

 
    return(
<Box>


<Routes>
    <Route path="/" element = {<HomeScreen/>} />
    <Route path="/customer-view" element = {<MainPage />} />
    <Route path='/all-requests' element={<Requests/>} />
    <Route path='/myprofile' element={<ProfileMain/>} />
</Routes>

</Box>
    )
  }
  export default MainRoutes;

  // element = {<Protected Cmp = {HomeScreen}/>}