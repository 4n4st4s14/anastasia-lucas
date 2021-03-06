import React from "react";
import './Developer.css';
import Projects from './Projects';
import projects from './projects.json';
import About from './About';
import Footer from './Footer';
import Scrollchor from 'react-scrollchor';

class Developer extends React.Component {
 state={
   projects
 };

  render() {
    return (

<div className='container'>
  <nav>
     <div className="nav-wrapper">
       <a className="center brand-logo">____</a>
       <ul id="nav-mobile" className="left hide-on-med-and-down">
         <li >
         <Scrollchor to="#contact" className="link link-one">Contact</Scrollchor></li>
       </ul>

       <ul id="nav-mobile" className="left hide-on-med-and-down">

         <li >
          <Scrollchor to="#portfolio" className="link link-one">Portfolio</Scrollchor></li>

       </ul>
     </div>
   </nav>


   <div id="wrap" >
   <svg width="630" height="420"  viewBox="200 0 240 420" xmlns="http://www.w3.org/2000/svg" version="1.1"  >

     <g transform="translate(0,180)">
       <polygon fill="#fff" points="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,40 0,40 0,40 0,40 0,40 0,50">
         <animate id="alp_d" attributeName="points"  dur="0.8s" repeatCount="1" fill="freeze" values="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,40 0,40 0,40 0,40 0,40 0,50; 0,50 10,50 10,10 10,10 10,10 10,10 10,10 10,10 0,0 0,0 0,0 0,0 0,0 0,0 0,50; 0,50 10,50 10,10 30,10 30,10 30,10 30,10 30,10 35,0 35,0 35,0 35,0 35,0 0,0 0,50; 0,50 10,50 10,10 30,10 40,20 40,20 40,20 40,20 50,15 50,15 50,15 50,15 35,0 0,0 0,50; 0,50 10,50 10,10 30,10 40,20 40,30 40,30 40,30 50,35 50,35 50,35 50,15 35,0 0,0 0,50; 0,50 10,50 10,10 30,10 40,20 40,30 30,40 30,40 35,50 35,50 50,35 50,15 35,0 0,0 0,50; 0,50 10,50 10,10 30,10 40,20 40,30 30,40 10,40 10,50 35,50 50,35 50,15 35,0 0,0 0,50;" />
       </polygon>
     </g>

     <g transform="translate(60,180)">
       <polygon fill="#fff" points="0,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50">
         <animate id="alp_e" attributeName="points" begin="alp_d.end" dur="0.8s" repeatCount="1" fill="freeze" values="0,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 10,30 10,20 10,20 10,10 10,10 10,0 0,0 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 10,30 10,20 10,20 10,10 50,10 50,0 0,0 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 40,30 40,20 10,20 10,10 50,10 50,0 0,0 0,50; 0,50 10,50 50,50 50,40 10,40 10,30 40,30 40,20 10,20 10,10 50,10 50,0 0,0 0,50;" />
       </polygon>
     </g>

     <g transform="translate(120,180)">
       <polygon fill="#fff" points="0,50 10,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40, 10,40 10,40 0,40 0,50">
         <animate id="alp_v" attributeName="points" begin="alp_e.end" dur="0.8s" repeatCount="1" fill="freeze" values="0,50 10,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40, 10,40 10,40 0,40 0,50; 0,50 30,50 30,50 30,50 25,40 25,40 25,40 25,40 25,40 10,40, 10,40 10,40 0,40 0,50; 0,50 30,50 50,30 50,30 40,25 40,25 25,40 25,40 25,40 10,40, 10,40 10,40 0,40 0,50; 0,50 30,50 50,30 50,0 40,0 40,25 25,40 25,40 25,40 10,40, 10,40 10,40 0,40 0,50; 0,50 30,50 50,30 50,0 40,0 40,25 25,40 10,25 10,25 0,30, 0,30 10,40 0,40 0,50; 0,50 30,50 50,30 50,0 40,0 40,25 25,40 10,25 10,0 0,0, 0,30 10,40 0,40 0,50; 0,50 30,50 50,30 50,0 40,0 40,25 25,40 10,25 10,0 0,0, 0,30 10,40 10,40 20,50;" />
       </polygon>
     </g>

     <g transform="translate(180,180)">
       <polygon fill="#fff" points="0,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50">
         <animate id="alp_e" attributeName="points" begin="alp_v.end" dur="0.8s" repeatCount="1" fill="freeze" values="0,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 10,30 10,20 10,20 10,10 10,10 10,0 0,0 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 10,30 10,20 10,20 10,10 50,10 50,0 0,0 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 40,30 40,20 10,20 10,10 50,10 50,0 0,0 0,50; 0,50 10,50 50,50 50,40 10,40 10,30 40,30 40,20 10,20 10,10 50,10 50,0 0,0 0,50;" />
       </polygon>
     </g>


     <g transform="translate(240,180)">
       <polygon fill="#fff" points="0,50 10,50 10,40 10,40 10,40 0,40 0,50">
         <animate id="alp_l" attributeName="points" begin="alp_e.end" dur="0.4s" repeatCount="1" fill="freeze" values="0,50 10,50 10,40 10,40 10,40 0,40 0,50; 0,50 50,50 50,40 10,40 10,40 0,40 0,50; 0,50 50,50 50,40 10,40 10,0 0,0 0,50;" />
       </polygon>
     </g>




     <g transform="translate(300,180)">
       <polygon fill="#fff" points="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50">
         <animate id="alp_o" attributeName="points" begin="alp_l.end" dur="0.8s" repeatCount="1" fill="freeze" values="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50; 0,50 10,50 10,10 10,10 10,10 10,10 10,10 10,10 10,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,10 40,10 40,10 50,10 50,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,40 40,40 40,50 50,50 50,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,40 10,40 10,50 50,50 50,0 0,0 0,50;" />
       </polygon>
     </g>
     <g transform="translate(360,180)">
       <polygon fill="#fff" points="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50">
         <animate id="alp_p" attributeName="points" begin="alp_o.end" dur="0.8s" repeatCount="1" fill="freeze" values="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50; 0,50 10,50 10,10 10,10 10,10 10,10 10,10 10,10 10,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,10 40,10 40,10 50,10 50,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,20 40,20 40,30 50,30 50,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,20 10,20 10,30 50,30 50,0 0,0 0,50;" />
       </polygon>
     </g>

     <g transform="translate(420,180)">
       <polygon fill="#fff" points="0,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50">
         <animate id="alp_e" attributeName="points" begin="alp_p.end" dur="0.8s" repeatCount="1" fill="freeze" values="0,50 10,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 10,30 10,20 10,20 10,10 10,10 10,0 0,0 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 10,30 10,20 10,20 10,10 50,10 50,0 0,0 0,50; 0,50 10,50 10,50 10,40 10,40 10,30 40,30 40,20 10,20 10,10 50,10 50,0 0,0 0,50; 0,50 10,50 50,50 50,40 10,40 10,30 40,30 40,20 10,20 10,10 50,10 50,0 0,0 0,50;" />
       </polygon>
     </g>
     <g transform="translate(480,180)">
       <polygon fill="#fff" points="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50">
         <animate id="alp_r" attributeName="points" begin="alp_e.end" dur="1s" repeatCount="1" fill="freeze" values="0,50 10,50 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 10,40 0,40 0,50; 0,50 10,50 10,10 10,10 10,10 10,10 10,10 10,10 10,10 10,10 10,10 10,10 10,10 10,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,10 40,10 40,10 40,10 40,10 50,10 50,10 50,10 50,10 50,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,20 40,20 40,30 40,40 40,50 50,50 50,35 50,30 50,30 50,0 0,0 0,50; 0,50 10,50 10,10 40,10 40,20 20,20 20,30 40,40 40,50 50,50 50,35 40,30 50,30 50,0 0,0 0,50;" />
       </polygon>
     </g>







   </svg>
<div className="bio">
  I am a fullstack Web developer with experience in audio engineering and marketing. This past year, I have fully immersed myself in Javascript development, gaining experience in building websites with full database backend from design to deployment. I am a quick study on new technologies, and excited to continue learning and building my skillset.
</div>
<div class="arrowAnim"></div>
 </div>
<div id="portfolio"></div>
 {this.state.projects.map(projects => (

  <Projects
    key={projects.id}
    id={projects.id}
    tech_stack={projects.tech_stack}
    github_url={projects.github_url}
    project_url={projects.project_url}
    tagline={projects.tagline}
    title={projects.title}
    background={projects.background}
    role={projects.role}
    desktop_image={projects.desktop_image}
    />
))}
<div id="contact"></div>
<Footer />
 </div>
);
}
}

export default Developer;
