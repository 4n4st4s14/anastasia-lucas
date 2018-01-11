import React from "react";
import './Navpills.css';

const Navpills = props =>
<nav>
   <div className="nav-wrapper">
     <a onClick={() => props.handlePageChange("Developer")}className="center brand-logo">____</a>
     <ul id="nav-mobile" className="left hide-on-med-and-down">
       <li onClick={() => props.handlePageChange("Contact")}>
       <a className="link link-one">Contact</a></li>
     </ul>

     <ul id="nav-mobile" className="right hide-on-med-and-down">

       <li onClick={() => props.handlePageChange("Developer")}>
       <a className="link link-one">Developer</a></li>
       <li onClick={() => props.handlePageChange("About")}>
       <a className="link link-one">About</a></li>
     </ul>
   </div>
 </nav>

  ;

export default Navpills;
