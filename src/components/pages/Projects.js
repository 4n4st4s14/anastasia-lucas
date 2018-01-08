import React from "react";
import './Projects.css';


const Projects  = (props) =>


<div className="props-container" >

     <div style={{background: "url(" + props.desktop_image + ")"}} className="props-body">
       <div className="props-intro">
         <h2 className="title">{props.title}</h2>
         <h5 className="tagline">{ props.tagline }</h5>
         <p> {props.background}</p>
       </div>
       <div className="props-details">
         <span className="bottom">{props.id}</span>  <span className="bottom"> {props.role}</span>   <span className="bottom">{props.tech_stack} </span> <span className="bottom"> {props.github_url}</span>
       </div>
     </div>
   </div>;



export default Projects;
