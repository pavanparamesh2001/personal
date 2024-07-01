import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Works() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id='works'>
      <h1 className='text-center mb-6'>Works</h1>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://wallpapercave.com/wp/wp2968489.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Doctor's App</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap, Reactjs, Mongodb</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://doctorsapp-pavan.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Doctor-App.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://as1.ftcdn.net/v2/jpg/01/68/62/20/1000_F_168622082_BEPNV2CyGvMjHAMc5zpyOVrZhjjFvSGx.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Travel App</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://travel-website-pavan.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Travel-website.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://c4.wallpaperflare.com/wallpaper/40/849/87/anime-girls-wallpaper-preview.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Furniture Site</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://furniture-website-pavan.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Furniture-site.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://t3.ftcdn.net/jpg/05/52/90/10/360_F_552901001_iVDRtsrQOjVvyH3foTMEYW2t0YalwYCL.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Movies App</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap, Javascript</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://movies-app-pavan.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Movies-App.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://4kwallpapers.com/images/wallpapers/success-inspirational-quotes-hand-dark-background-5k-2880x1800-8265.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Quotes Generator</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap, Javascript</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://quote-generator-pavan.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Quote-Generator.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://png.pngtree.com/background/20231016/original/pngtree-golden-calculator-symbol-on-matte-red-plate-3d-rendered-icon-for-picture-image_5577508.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap, Javascript</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://calculator-app-pavan.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Calculator-App.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://i.pinimg.com/736x/67/3e/26/673e26054442d2cf72a3d84d1f390e1a.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Date & Time App</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap, Javascript</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://date-time-app.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Date-Time.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://w0.peakpx.com/wallpaper/126/882/HD-wallpaper-government-money-background-dollars-budget-concepts-business-concepts.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Budget-App</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap, Javascript</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://budget-calculator-task.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Budget-calculator.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <div className="card" style={{ width: '18rem' }}>
              <img src='https://static.vecteezy.com/system/resources/previews/007/928/826/large_2x/red-percent-symbol-higher-interest-rates-on-deposits-and-digital-money-in-the-concept-of-financial-stability-and-growth-and-an-empty-space-for-entering-text-on-a-yellow-background-realistic-3d-render-photo.jpg' height={'250px'} position='top' alt='...' />
              <div className="card-body">
                <h5 className="card-title">Interest-Calculator</h5>
                <p className="card-text">Operators: Html, Css, Bootstrap, Javascript</p>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://simple-interestcalculator-pavan.netlify.app/"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Live demo</a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-outline-light btn-md m-1"
                  href="https://github.com/pavanparamesh2001/Interest-Calculator.git"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >Repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;