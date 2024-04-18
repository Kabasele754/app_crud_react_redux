import React from 'react';

const ContactForm = () => {
  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-3">
          <div className="contact-info">
            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
            <h2>Contact Us</h2>
            <h4>We would love to hear from you!</h4>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="contact-form ">
            <div className="form-group mb-3">
              <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
              <div className="col-sm-10">          
                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
              <div className="col-sm-10">          
                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="control-label col-sm-2" htmlFor="email">Email:</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
            <div className="form-group mb-7">        
              <div className="col-sm-offset-12 col-sm-10">
                <button type="submit" className="btn btn-default col-12">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
