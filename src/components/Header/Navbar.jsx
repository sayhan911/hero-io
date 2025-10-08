import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li  className="nav-link">
              <a>Home</a>
            </li>
            <li  className="nav-link">
              <a>Apps</a>
            </li>
            <li  className="nav-link">
              <a>Installation</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <img
            className="w-9 h-9 md:w-10 md:h-10 mr-1 md:mr-2 ml-0 md:ml-4 lg:ml-12"
            src={logo}
            alt=""
          />
          <a className="site-title text-base md:text-xl uppercase font-bold cursor-pointer">
            hero.io
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li  className="nav-link">
            <a>Home</a>
          </li>
          <li  className="nav-link">
            <a>Apps</a>
          </li>
          <li  className="nav-link">
            <a>Installation</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex">
        <a className="btn-contribute btn mr-4 lg:mr-12">
          <FontAwesomeIcon
            className="text-xl"
            icon={faGithub}
          ></FontAwesomeIcon>{" "}
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
