import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import './Skills.css';

function Skills({ theme }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div id='Skills'>
      <section className={`services ${theme ? 'dark' : 'light'}`}>
        <h1 className='text-center mb-6' style={{ color: theme ? 'white' : 'black' }}>Skills</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://logowik.com/content/uploads/images/492_html5.jpg' alt="HTML5"/>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://logowik.com/content/uploads/images/123_css3.jpg' alt="CSS3"/>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969' alt="JavaScript"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png' alt="Bootstrap"/>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://miro.medium.com/v2/resize:fit:960/0*acB7EdIeWDFW0caX.jpg' alt="Another skill"/>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://findlogovector.com/wp-content/uploads/2022/04/mongodb-logo-vector-2022.png' alt="MongoDB"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://5.imimg.com/data5/SELLER/Default/2021/6/OD/DF/RP/23999962/c-language-500x500.jpg' alt="C Language"/>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUyGl67qVZxc4Ufb2m7JXd4wox6wSiRcidD-qCGEs1g&s' alt="Another skill"/>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="services-box">
                <img src='https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png' alt="SolidWorks"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;