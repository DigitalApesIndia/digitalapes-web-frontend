import React from "react";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Importing Atoms
import { SocialLinksForNavbar } from "./Atoms/SocialLinks";

// Logo Imports
import digitalApesLogo from "../assets/images/digitalapes_logo_svg.svg";
import digitalApesLogoWhite from "../assets/images/digitalapes_logo_white_svg.svg";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [navCurtainVisible, setNavCurtainVisible] = useState(false);

  let isBetweenMobileBreakPoint;
  if (window.innerWidth < 768) isBetweenMobileBreakPoint = true;
  else isBetweenMobileBreakPoint = false;

  const { pathname } = useLocation();

  window.addEventListener("scroll", () => {
    Math.round(window.scrollY) > 80
      ? setIsScrolled(true)
      : setIsScrolled(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) isBetweenMobileBreakPoint = true;
    else isBetweenMobileBreakPoint = false;
    navCurtainVisible === true && isBetweenMobileBreakPoint
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });
  navCurtainVisible === true && isBetweenMobileBreakPoint
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  useEffect(() => {
    if (pathname == "/services") setTheme("dark");
    else {
      setTheme("light");
    }
  }, [pathname]);

  return (
    <>
      <nav
        className={`${
          pathname === "/services" && isScrolled === false
            ? " md:bg-transparent md:backdrop-blur-none"
            : ""
        } bg-dark backdrop-blur-xl fixed top-0 z-50 w-full flex flex-col align-center px-6 transition-colors duration-300 ${
          theme == "dark" ? "bg-black/75" : "bg-white/75"
        }`}
      >
        <div className="flex align-center justify-between w-full h-20 z-20">
          <Link to="/" className="self-center select-none">
            <img
              src={theme === "dark" ? digitalApesLogoWhite : digitalApesLogo}
              alt="Digital Apes Logo"
              className="w-40"
              onClick={() => {
                if(navCurtainVisible) setNavCurtainVisible(false);
              }}
            />
          </Link>

          <ul className="align-center justify-center gap-8 hidden md:flex">
            <li
              className={`self-center text-sm cursor-pointer font-medium ${
                pathname == "/" ? "active-nav-menu-light" : ""
              } 
              
              ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`self-center text-sm cursor-pointer font-medium ${
                pathname == "/services" ? "active-nav-menu-dark" : ""
              } ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={`self-center text-sm cursor-pointer font-medium ${
                pathname == "/contact" ? "active-nav-menu-light" : ""
              }  ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <Link to="/contact" className="self-center">
              <li
                className={`self-center text-sm py-3 px-6  rounded-full transition-all duration-200 cursor-pointer hover:bg-primary hover:text-white ${
                  theme === "dark"
                    ? "bg-white text-slate-900"
                    : "bg-black text-white "
                }`}
              >
                Get Project Estimation
              </li>
            </Link>
          </ul>

          <div
            className="navCurtainTrigger flex flex-col gap-2 self-center p-3 md:hidden transition-all duration-200 hover:active:scale-110"
            onClick={() => {
              setNavCurtainVisible(!navCurtainVisible);
            }}
          >
            <div
              className={`h-0.5 w-6 transition-all duration-500 ${
                theme === "dark" ? "bg-white" : "bg-slate-950"
              } ${
                navCurtainVisible === true
                  ? "translate-y-2.5 rotate-45"
                  : "rotate-0"
              }`}
            ></div>
            <div
              className={`h-0.5 transition-all duration-300 ${
                theme === "dark" ? "bg-white" : "bg-slate-950"
              } ${navCurtainVisible === true ? "opacity-0" : "opacity-100"}`}
            ></div>
            <div
              className={`h-0.5 w-6 transition-all duration-500 ${
                theme === "dark" ? "bg-white" : "bg-slate-950"
              } ${
                navCurtainVisible === true
                  ? " -translate-y-2.5 -rotate-45"
                  : "rotate-0"
              }`}
            ></div>
          </div>
        </div>

        <div
          className={`transition-all duration-500 flex flex-col items-center justify-start  z-10 overflow-hidden md:hidden ${
            navCurtainVisible === true ? "nav-curtain-height pt-20" : "h-0"
          }`}
        >
          <ul
            className={`align-center justify-center gap-8 flex flex-col md:hidden w-full md:w-auto transition-all duration-300 mb-20 ${
              navCurtainVisible === true ? "opacity-100" : "opacity-0"
            }`}
          >
            <li
              className={`self-center text-3xl cursor-pointer font-semibold ${
                pathname == "/" ? "active-nav-menu-light" : ""
              }  ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
              onClick={() => setNavCurtainVisible(false)}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              className={`self-center text-3xl cursor-pointer font-semibold ${
                pathname == "/services" ? "active-nav-menu-dark" : ""
              } ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
              onClick={() => setNavCurtainVisible(false)}
            >
              <Link to="/services">Services</Link>
            </li>

            <li
              className={`self-center text-3xl cursor-pointer font-semibold ${
                pathname == "/contact" ? "active-nav-menu-light" : ""
              } ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
              onClick={() => setNavCurtainVisible(false)}
            >
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li
              className={`self-center w-full text-center text-xl py-3 px-6 rounded-full transition-all duration-200 cursor-pointer hover:bg-primary hover:text-white ${
                theme === "dark"
                  ? "bg-white text-slate-900"
                  : "bg-black text-white "
              }`}
            >
              Get Project Estimation
            </li> */}
          </ul>

          <SocialLinksForNavbar />
        </div>
      </nav>
    </>
  );
}
