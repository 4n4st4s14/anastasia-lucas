import React from "react";
import './About.css';
import github from './github.png';
import linkedin from './linkedin.png';
import Footer from './Footer.js';

const About = () =>

        <div className="container center">
          <section class = "col-lg-12" id="about">

              <div class="row">
                 <h2>Hello!</h2>
               <div id="about-container">
                  <div class="about-p col s12">
                    <p>I am a fullstack Web developer with experience in audio engineering and marketing. This past year, I have fully immersed myself in Javascript development, gaining experience in building websites with full database backend from design to deployment. I am a quick study on new technologies, and excited to continue learning and building my skillset.
                    </p>
                  </div>

                  </div>
              </div>
            </section>

          <Footer />
        </div>;

export default About;
