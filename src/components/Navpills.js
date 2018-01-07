import React from "react";
import './Navpills.css';

const Navpills = props =>
<nav>
   <div class="nav-wrapper">
     <a href="#" class="center brand-logo">Logo</a>
     <ul id="nav-mobile" class="left hide-on-med-and-down">
       <li onClick={() => props.handlePageChange("Contact")}>
       <a>Contact</a></li>
     </ul>

     <ul id="nav-mobile" class="right hide-on-med-and-down">

       <li onClick={() => props.handlePageChange("Developer")}>
       <a>Developer</a></li>
       <li onClick={() => props.handlePageChange("Designer")}>
       <a>Designer</a></li>
     </ul>
   </div>
 </nav>

  ;

export default Navpills;
