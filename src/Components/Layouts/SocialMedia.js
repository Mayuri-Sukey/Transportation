import React, { useState } from "react";
import "../../Styles/SocialMedia.css"; // Import your CSS file
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const SocialMedia = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="menu">
      <a
        href="https://www.facebook.com/shrisaibabasansthantrustshirdi"
        className={isMenuVisible ? "hidden" : "show"}
        target="_blank"
      >
        <FaFacebook id="facebook" />
      </a>
      <a
        className={isMenuVisible ? "hidden" : "show"}
        href="https://www.instagram.com/shreesaibabasansthantrust?utm_medium=copy_link"
        target="_blank"
      >
        <FaInstagram id="insta" />
      </a>
      <a
        className={isMenuVisible ? "hidden" : "show"}
        href="https://twitter.com/ssstshirdi"
        target="_blank"
      >
        <FaTwitter id="twitter" />
      </a>
      <a
        className={isMenuVisible ? "hidden" : "show"}
        href="https://www.youtube.com/user/saibabasansthantrust/videos"
        target="_blank"
      >
        <FaYoutube id="youtube" />
      </a>
      <a className="" onClick={toggleMenu}>
        <BiSolidMessageSquareAdd id="soc" />
      </a>
    </div>
  );
};

export default SocialMedia;
