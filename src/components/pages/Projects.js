import React, {Component} from "react";
import './Projects.css';
import github from './github.png'
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component{
constructor(props) {

  super(props);

}

render(){
  const divStyle = {
    color: 'white',
    backgroundImage: 'url(' + this.props.desktop_image + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all',
   // 'ms' is the only lowercase vendor prefix
  };
  return(
<div className="props-container" >
    <a href={this.props.project_url} target="_blank">
     <div style={divStyle}  className="props-body">
       <div className="props-intro">
         <h2 className="title">{this.props.title}</h2>
         <h5 className="tagline">{ this.props.tagline }</h5>
         <p className="background"> {this.props.background}</p>
       </div>
       <div className="props-details">
         <span className="bottom"><a href={this.props.github_url} ><img src={github} alt="github" className="github"/></a></span><span className="bottom">{this.props.id}</span>  <span className="bottom"> {this.props.role}</span>   <span className="bottom">{this.props.tech_stack} </span>
       </div>
     </div>
</a>
   </div>
 );
}
};


export default Projects;
