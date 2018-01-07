import React from "react";

const Projects = (props) =>
  <div>
    <h1>Projects Page</h1>
    <p>
    {props.tagline}{props.title}{props.background}{props.role}
    </p>
  </div>;

export default Projects;
