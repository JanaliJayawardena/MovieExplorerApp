import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import * as Config from "./../../constants/Config";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__columns">
          <div className="footer__column">
            <h3>Navigation</h3>
            <Link to={`/${Config.HOME_PAGE}`}>Home</Link>
            <Link to={`/${Config.HOME_PAGE}/movie`}>Movies</Link>
            <Link to={`/${Config.HOME_PAGE}/tv`}>TV Series</Link>
            <Link to="/favorites">Favorites</Link>
          </div>

          <div className="footer__column">
            <h3>Information</h3>
            <span>Contact Us</span>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom">
        <p>© 2025 Movie Explorer. All rights reserved.</p>
      </div>
    </div>


  );
};

export default Footer;
