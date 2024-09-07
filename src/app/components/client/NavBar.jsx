"use client";
import { questrial } from "../../ui/fonts.js";
import { useEffect, useRef, useState } from "react";
import "../styles/NavBar.css";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className=" bg-white marker:grid items-center w-screen content-center shadow-sm bg-opacity-30 backdrop-blur-sm h-fit animate-fade animate-duration-[1500ms] animate-delay-0 animate-normal animate-fill-forwards"
    >
      <Link href="/">
        <div className=" select-none pl-5 ">
          <Image
            width={150}
            height={80}
            alt="Logo"
            src="img/logoIluminaria.svg"
          />
        </div>
      </Link>
      <ul
        className={`grid ${
          questrial.className
        } pr-6 sm:h-full bg-[#d4fcc2] backdrop-blur-2xl text-xl sm:grid-cols-3 sm:px-16 navItem ${
          isOpen && "open"
        } sm:mt-0 mt-12`}
      >
        <Link
          className="grid bg-[#e8fede] sm:border sm:border-x items-center justify-items-center sm:w-full sm:h-full h-fit hover:bg-slate-50 px-8 rounded-3xl duration-300 sm:rounded-none w-full select-none"
          href="/"
          onClick={handleLinkClick}
        >
          <li className="">Inicio</li>
        </Link>
        <Link
          className="grid w-full bg-[#e8fede] sm:border sm:border-x items-center justify-items-center sm:w-full sm:h-full  h-fit hover:bg-slate-50 px-8 rounded-3xl duration-300 sm:rounded-none select-none"
          href="/galeria"
          onClick={handleLinkClick}
        >
          <li className="">Galeria</li>
        </Link>
        <Link
          className="grid bg-[#e8fede] sm:border sm:border-x items-center justify-items-center sm:w-full sm:h-full h-fit hover:bg-slate-50 px-8 rounded-3xl duration-300 sm:rounded-none w-full select-none"
          href="/quienesomos"
          onClick={handleLinkClick}
        >
          <li className="">Quienes Somos</li>
        </Link>
      </ul>
      <div
        className={`navToggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
