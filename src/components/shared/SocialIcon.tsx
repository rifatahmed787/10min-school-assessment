import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
const SocialIcon = () => {
  return (
    <div className="main">
      <div className="up">
        <button className="card1">
          <SiLinkedin className="linkedIn" />
        </button>
        <button className="card2">
          <FaFacebookSquare className="facebook" />
        </button>
      </div>
      <div className="down">
        <button className="Btn card3">
          <span className="svgContainer">
            <FaInstagramSquare className="instagram svgIcon" />
          </span>
          <span className="BG"></span>
        </button>
        <button className="card4">
          <FaSquareWhatsapp />
        </button>
      </div>
    </div>
  );
};

export default SocialIcon;
