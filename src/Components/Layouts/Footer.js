import React, { useState, useEffect } from "react";
import "../../Styles/FooterStyle.css";
import Logo from "../../assets/logo.png";
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const companyLinks = [
    { label: "About Us", icon: FaRegArrowAltCircleRight, link: "about" },
    { label: "Products", icon: FaRegArrowAltCircleRight, link: "contact" },
    { label: "Accreditation", icon: FaRegArrowAltCircleRight, link: "contact" },
    { label: "Contact Us", icon: FaRegArrowAltCircleRight, link: "" },
    { label: "Vision and Mission", icon: FaRegArrowAltCircleRight, link: "" },
    { label: "Management Team", icon: FaRegArrowAltCircleRight, link: "" },
    { label: "Infrastructure", icon: FaRegArrowAltCircleRight, link: "" },
    { label: "Quality Assurance", icon: FaRegArrowAltCircleRight, link: "" },
    { label: "Why Us", icon: FaRegArrowAltCircleRight, link: "" },
  ];

  const midpoint = Math.ceil(companyLinks.length / 2);
  const firstColumnLinks = companyLinks.slice(0, midpoint);
  const secondColumnLinks = companyLinks.slice(midpoint);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text1:
        "Regd. Office: MH Nochanwala Exporter, City Kamptee, Pin Code 441001 District Nagpur, Maharashtra State, INDIA",
    },
    { icon: <FaPhoneAlt />, text1: "+91 9307091009", text2: "+91 9370026214" },
    {
      icon: <FaEnvelope />,
      text1: "info@mhnochanwala.com",
      text2: "mhnochanwala@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, scale: 1.3 },
    { icon: FaFacebookF, scale: 1.3 },
    { icon: FaYoutube, size: 40, scale: 1.3 },
    { icon: FaLinkedin, scale: 1.3 },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    const heightToHidden = 250;
    const windowScroll = document.documentElement.scrollTop;
    setIsVisible(windowScroll > heightToHidden);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      <div
        className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#255b68" }}
      >
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <img src={Logo} className="footer-logo" alt="Company Logo" />
              <div className="d-flex pt-3 ">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className="btn btn-outline-light btn-social"
                    href="/"
                  >
                    {React.createElement(social.icon, {
                      className: "display-1",
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
                {firstColumnLinks.map((link, index) => (
                  <a
                    key={index}
                    className="btn btn-link d-flex align-items-center mb-2"
                    href={link.link}
                  >
                    {React.createElement(link.icon, { className: "me-2" })}
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
                {secondColumnLinks.map((link, index) => (
                  <a
                    key={index}
                    className="btn btn-link d-flex align-items-center mb-2"
                    href={link.link}
                  >
                    {React.createElement(link.icon, { className: "me-2" })}
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
                  <span style={{ marginRight: "30px" }}>{info.icon}</span>
                  {info.text1} <br /> {info.text2}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                Designed abd Developed by{" "}
                <a className="border-bottom" href="https://www.royalswebtech.com/">
                  <strong>© Royals WebTech 2024</strong>
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/">Cookies</a>
                  <a href="/">Help</a>
                  <a href="/">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default Footer;
