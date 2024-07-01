import React, { useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Home.css';
import resume from '../assets/PavanResume.pdf';
import profileImage from '../assets/PavanImage4.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home({ theme, toggleTheme }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={`home-container ${theme ? 'dark' : 'light'}`} id='Home'>
      <MDBContainer>
        <MDBRow>
          <MDBCol size='md' data-aos="fade-right">
            <h1 className='heading mt-5 mx-4 slide-left' id='header'>
              <b> Hi...My name is <span style={{ color: "violet" }}> P Pavan</span> </b>
            </h1>
            <h4 className='undersection mt-4 slide-left' id='heading'>
              A passionate student diving into the world of <span style={{ color: "#ff004f" }}> Mearn Stack Web development</span> with an insatiable curiosity and a love for coding.
            </h4>
            <div className="text-left mt-4">
              <a href={resume} download className="resume-button magical-button">
                Resume
              </a>
            </div>
          </MDBCol>
          <MDBCol size='md' className='image-container' data-aos="fade-right">
            <img src={profileImage} alt="Profile" className='profile-image' />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Home;