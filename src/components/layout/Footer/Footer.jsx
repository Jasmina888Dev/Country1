import React from "react";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { ImVk } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--start">
            <h1>logo</h1>
            <div className="footer--start__icon">
              <a>
                <FaSquareInstagram />
              </a>
              <a>
                <FaFacebook />
              </a>
              <a>
                <ImVk />
              </a>
              <a>
                <MdEmail />
              </a>
            </div>
          </div>
          <div className="footer--home">
            <h1>Home</h1>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
