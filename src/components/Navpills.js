import React from "react";
import './Navpills.css';


const Navpills = props =>
<nav>
   <div className="nav-wrapper">
     <a onClick={() => props.handlePageChange("Developer")}className="center brand-logo">____</a>
     <ul id="nav-mobile" className="left hide-on-med-and-down">
       <li onClick={() => props.handlePageChange("About")}>
       <a className="link link-one">About</a></li>
     </ul>

     <ul id="nav-mobile" className="left hide-on-med-and-down">

       <li onClick={() => props.handlePageChange("Developer")}>
       <a className="link link-one">Portfolio</a></li>

     </ul>
   </div>
 </nav>

  ;

export default Navpills;
