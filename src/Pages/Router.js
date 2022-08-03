import React from "react";
import Job from "./Job";
import JobDetails from './JobDetails'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function ReactRouter() {


  return (

    
    <Router>

          <Routes>
        
            <Route path="/" element={<Job />} />
            <Route path="/JobDetails/:id" element={<JobDetails />} />

          </Routes>

    </Router>

   


  )
}
