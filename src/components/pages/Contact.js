import React from "react";
import './Contact.css';

const Contact = () =>
<section className="panel b-green" id="4">
  <article className="panel__wrapper">
    <div className="panel__content">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="contact-content">
              <div className="heading">
                <h4>Say Hello!</h4>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="contat-form">
                    <form id="contact" action="" method="post">
                      <fieldset>
                        <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" />
                      </fieldset>
                      <fieldset>
                        <input name="email" type="email" className="form-control" id="email" placeholder="Email" required="" />
                      </fieldset>
                      <fieldset>
                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required=""></textarea>
                      </fieldset>
                      <fieldset>
                        <button type="submit" id="form-submit" className="btn">Send Message</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="more-info">
                    <p>Something about myself, or how to get in touch<br/><br/>
                    <em>address? resume?</em></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer">
              <p>Copyright &copy; 2018
              | Designed with &hearts; by Anastasia Lucas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</section>
;

export default Contact;
