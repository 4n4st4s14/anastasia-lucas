import React from "react";

const Projects = (props) =>
<div className="props-container" >

     <div className="props-body">
       <div className="props-intro">
         <h2>{props.title}</h2>
         { props.tagline }
         <ul className="tech-icon-container">

         </ul>
       </div>
       <div className="desktop-screenshot-container no-mobile">
         { <img src={props.desktop_image}/> }
       </div> 
       <ul className="props-links">
         <a href={props.props_url} target="_blank">
           <li>View props
           <i className="fa fa-external-link-square"></i></li>
         </a>
         {props.github_url ?
           <a href={props.github_url} target="_blank">
             <li>Github
             <i className="fa fa-external-link-square"></i></li>
           </a>
         : null }
       </ul>
       <div className="props-details">
         {props.role}
       </div>
     </div>
   </div>;

export default Projects;
