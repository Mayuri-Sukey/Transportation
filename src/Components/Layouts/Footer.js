import React, {useState, useEffect} from 'react'
import "../../Styles/FooterStyle.css"
import Logo from '../../assets/logo.png';
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', icon: FaRegArrowAltCircleRight, Link: 'about' },
    { label: 'Products', icon: FaRegArrowAltCircleRight, Link: 'contact' },
    { label: 'Accreditation', icon: FaRegArrowAltCircleRight, Link: 'contact' },
    { label: 'Contact Us', icon: FaRegArrowAltCircleRight, Link: '' },
    { label: 'vision and mission', icon: FaRegArrowAltCircleRight, Link: '' },
    { label: 'Management Team', icon: FaRegArrowAltCircleRight, Link: '' },
    { label: 'Infrastructure', icon: FaRegArrowAltCircleRight, Link: '' },
    { label: 'Quality Assurance', icon: FaRegArrowAltCircleRight, Link: '' },
    { label: 'Why Us', icon: FaRegArrowAltCircleRight, Link: '' }
  ];

  const midpoint = Math.ceil(companyLinks.length / 2);

  // Split the array into two separate arrays
  const firstColumnLinks = companyLinks.slice(0, midpoint);
  const secondColumnLinks = companyLinks.slice(midpoint);

  const contactInfo = [
    {
      icon:  <FaMapMarkerAlt />,
      text1: 'Regd. Office: MH Nochanwala Exporter, City Kamptee, Pin Code 441001 District Nagpur, Maharashtra State, INDIA'
    },
    { icon: <FaPhoneAlt />, text1: '+91 9307091009 ', text2:'+91 9370026214' },
    { icon: <FaEnvelope />, text1: 'info@mhnochanwala.com', text2:'mhnochanwala@gmail.com'},
  ];

  const socialLinks = [
    { icon: FaTwitter, scale: 1.3 },
    { icon: FaFacebookF, scale: 1.3 },
    { icon: FaYoutube, size: 40, scale: 1.3 },
    { icon: FaLinkedin, scale: 1.3 },
  ];

  const openingHours = [
    { day: 'Monday - Saturday', time: '09AM - 09PM' },
    { day: 'Sunday', time: '10AM - 08PM' },
  ];


  const[isVisible,setIsVisible ] = useState(false);
  const scrollTop = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  };

  const listenToScroll = () =>{
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
  })

  return (
    <React.Fragment>
  <div
  className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
  data-wow-delay="0.1s"
  style={{ backgroundColor: '#255b68' }}
>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <img src={Logo} className="footer-logo"/>
              <div className="d-flex pt-3 ">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className="btn btn-outline-light btn-social"
                    href=""
                  >
                    {React.createElement(social.icon, {
                      className: 'display-1',
                      style: { scale: social.scale, size: social.size },
                    })}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
          Useful Links
        </h4>
        <div className="d-flex flex-column">
          {/* Render links for the first column */}
          {firstColumnLinks.map((link, index) => (
            <a
              key={index}
              className="btn btn-link d-flex align-items-center mb-2"
              href={link.link}
            >
              {React.createElement(link.icon, { className: 'me-2' })}
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
          &nbsp;
        </h4>
        <div className="d-flex flex-column">
          {/* Render links for the second column */}
          {secondColumnLinks.map((link, index) => (
            <a
              key={index}
              className="btn btn-link d-flex align-items-center mb-2"
              href={link.link}
            >
              {React.createElement(link.icon, { className: 'me-2' })}
              {link.label}
            </a>
          ))}
        </div>
      </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
               Get In Touch
              </h4>
              {contactInfo.map((info, index) => (
    <p key={index} className="mb-2">
      <span style={{ marginRight: '30px' }}>{info.icon}</span>{/* Using inline style for margin */}
      {info.text1}  <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{info.text2}
    </p>
  ))}
              {/* <div className="d-flex pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className="btn btn-outline-light btn-social"
                    href=""
                  >
                    {React.createElement(social.icon, {
                      className: 'display-1',
                      style: { scale: social.scale, size: social.size },
                    })}
                  </a>
                ))}
              </div> */}
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Opening
              </h4>
              {openingHours.map((hours, index) => (
                <React.Fragment key={index}>
                  <h5 className="text-light fw-normal">{hours.day}</h5>
                  <p>{hours.time}</p>
                </React.Fragment>
              ))}
            </div> */}
            {/* <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Newsletter
              </h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{' '}
                <a className="border-bottom" href="#">
                 Royals Webtech PVT LTD
                </a>
                , All Right Reserved.
                <br />
                <br />
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isVisible && (   <div className='scroll_top' onClick={scrollTop}>
      <i class="bi bi-arrow-up"></i>
    </div>)}
    </React.Fragment>
  );
};

export default Footer;