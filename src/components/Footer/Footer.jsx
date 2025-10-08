import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#011931] p-10 md:flex md:justify-evenly justify-items-center">
      <aside className="w-1/3 flex flex-col items-center justify-center mb-10 md:mb-0 mr-0 md:mr-6">
        <img className="w-20 h-auto mb-2" src={logo} alt="" />
        <p className="logo-footer text-base md:text-xl uppercase font-bold cursor-pointer">
          Hero.io
        </p>
      </aside>
      <div className="grid grid-cols-2 gap-6 w-full justify-items-center md:flex md:justify-evenly">
        <nav className="flex flex-col gap-1 md:gap-2 w-3/4">
          <h6 className="footer-title">Services</h6>
          <a className="footer-link">Pricing</a>
          <a className="footer-link">Tutorials</a>
          <a className="footer-link">Features</a>
        </nav>
        <nav className="flex flex-col gap-1 md:gap-2 w-3/4 text-right md:text-left">
          <h6 className="footer-title">Company</h6>
          <a className="footer-link">Join us</a>
          <a className="footer-link">About us</a>
          <a className="footer-link">Contact us</a>
        </nav>
        <nav className="flex flex-col gap-1 md:gap-2 w-3/4">
          <h6 className="footer-title">Legal</h6>
          <a className="footer-link">Terms of use</a>
          <a className="footer-link">Cookie policy</a>
          <a className="footer-link">Privacy policy</a>
        </nav>
        <nav className="flex flex-col gap-1 md:gap-2 w-3/4 text-right md:text-left">
          <h6 className="footer-title">Social</h6>
          <a className="footer-link">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn
          </a>
          <a className="footer-link">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook
          </a>
          <a className="footer-link">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
