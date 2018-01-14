import React from "react";
import './About.css';
import github from './github.png';
import linkedin from './linkedin.png';
import Footer from './Footer.js';

const About = () =>

        <div className="container center">
          
          <h2 className="section-title ">Contact Me</h2>

            <div className="col s12">
              <div className="row center-xs">

                <div className="col s3">
                  <i className="medium material-icons">email</i>
                  <div className="contact-number">

                    ana2.0stasia@gmail.com
                  </div>
                </div>



                <div className="col s3">
                  <i className="medium material-icons">phone_iphone</i>
                  <div className="contact-number">

                    +1 571-393-5853
                  </div>
                </div>

                <div className="col s3">
                  <img className ="github" src={github} alt="github" />
                  <div className="contact-number">

                    <a href="https://github.com/4n4st4s14" target="blank" style={{color:'white'}}>GitHub</a>
                  </div>

                </div>

                <div className="col s3">
                  <img className="linkedin" src={linkedin} alt="linkedin" />
                  <div className="contact-number">
                  <a href="https://www.linkedin.com/in/anastasia-lucas-316a6aab/" target="blank" style={{color:'white'}}>LinkedIn</a>
                  </div>

                </div>
            </div>
        </div>
      <Footer />
  </div>;

export default About;
