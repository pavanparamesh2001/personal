import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div id='contact'>
        <div className="container">
          <div className="row">
            <div className="contact-left" data-aos="fade-up">
              <h1 className="sub-title">Contact Me</h1>
              <p><i className="fas fa-paper-plane"></i> pavanparamesh4132@gmail.com</p>
              <p><i className="fas fa-square-phone"></i>9847140344</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/tim.berners.lee"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/timberners_lee"><i className="fab fa-twitter-square"></i></a>
                <a href="https://www.instagram.com/tim.berners.lee/?hl=en"><i className="fab fa-instagram-square"></i></a>
              </div>
            </div>
            <div className="contact-right" data-aos="fade-up">
              <form>
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;