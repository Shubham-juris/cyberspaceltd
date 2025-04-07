import React from 'react'
import { Routes, Route } from "react-router";
import Home from '../Pages/Home';
import About from '../Pages/About';
import GetInTouch from '../Pages/GetInTouch';
import Employers from '../Pages/Employers';
import EmployersPortal from '../Pages/EmployersPortal';
import Jobseekers from '../Pages/Jobseekers';



function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/getintouch" element={<GetInTouch />} />
      <Route path="/employers" element={<Employers />} />
      <Route path="/employersportal" element={<EmployersPortal />} />
      <Route path="/jobseekers" element={<Jobseekers />} />
    </Routes>
  )
}

export default Router;