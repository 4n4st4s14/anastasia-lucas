import React from "react";
import './Navpills.css';

const Navpills = props =>
<nav>
   <div className="nav-wrapper">
     <a href="#" className="center brand-logo">Logo</a>
     <ul id="nav-mobile" className="left hide-on-med-and-down">
       <li onClick={() => props.handlePageChange("Contact")}>
       <a className="link link-one">Contact</a></li>
     </ul>

     <ul id="nav-mobile" className="right hide-on-med-and-down">

       <li onClick={() => props.handlePageChange("Developer")}>
       <a className="link link-one">Developer</a></li>
       <li onClick={() => props.handlePageChange("Designer")}>
       <a className="link link-one">Designer</a></li>
     </ul>
   </div>
 </nav>

  ;

export default Navpills;
