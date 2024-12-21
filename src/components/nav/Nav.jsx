import React, { useState } from "react";
import bsLogo from "../../assets/logoBs.svg";
import { slide as Menu } from "react-burger-menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, scroller } from "react-scroll";
import "./Nav.css";

export const handleScroll = (target) => {
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

export function NavBs() {
  

  const [isOpen, openMenu] = useState(false);
  return (
    <div className="relative">
      <div className="bs-header w-full flex justify-between items-center font-bold py-10 sm:px-20 z-20">
        <img
          src={bsLogo}
          className="bs-header-logo max-w-[150px] sm:max-w-[216px]  flex-1"
        ></img>
        <nav className="hidden xl:flex bs-header-nav px-[200px]  justify-between items-center flex-1 px-70">
          <Link
            to="servicios"
            smooth={true}
            duration={500}
            className="nav-item"
          >
            Servicios
          </Link>
          <Link
            to="proyectos"
            smooth={true}
            duration={500}
            className="nav-item"
          >
            Proyectos
          </Link>
          <Link to="nosotros" smooth={true} duration={500} className="nav-item">
            Nosotros
          </Link>
        </nav>
        <div className="bs-header-btn hidden xl:block text-[20px] font-bold">
          <button onClick={() => handleScroll('contacto')} className="bg-[#5C43FF] py-3 px-5 rounded-[15px] text-[20px]">
            Contactanos
          </button>
        </div>
        <div className="block xl:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-[30px] cursor-pointer"
            onClick={() => openMenu(true)}
          ></FontAwesomeIcon>
        </div>
      </div>

      <div
        className={`top-0 left-0 w-[100%] h-[100vh] bg-black bg-opacity-50
                             ${isOpen ? "fixed" : "hidden"}
            `}
      ></div>
      <div
        className={`${isOpen ? "menu-res" : "menu-res-hidden"}
                p-6 sm:p-10 text-end`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="text-[30px] cursor-pointer"
          onClick={() => openMenu(false)}
        ></FontAwesomeIcon>
        <img src={bsLogo} className="max-w-[150px] m-auto my-10" alt="" />
        <div
          className="menu-b flex flex-col justify-center items-center gap-6
                 text-[22px] font-bold"
        >
          <a>Servicios</a>
          <a>Nosotros</a>
          <a>Proyectos</a>
          <button className="bg-[#5C43FF] py-3 w-[80%] m-auto rounded-[15px] text-[20px]">
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
}
