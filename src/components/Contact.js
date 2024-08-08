import React from 'react';
import '../assets/css/App.css'; // Import CSS file
import '../assets/css/Contact.css'; // Import CSS file


const Contact = () => {
  return (
    <section id="contact" className="section container-fluid py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-decoration-none">Contact Me</h2>
        <form>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Enter the subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control h-100" id="message" rows="6" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
