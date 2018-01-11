import React, {Component} from "react";
import './Projects.css';
import github from './github.png'

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
   </div>
 );
}
};


export default Projects;
