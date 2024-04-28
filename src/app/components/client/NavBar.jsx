"use client";
import { questrial, abel, bebas } from "../../ui/fonts.js";
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

  return (
    <nav
      ref={navRef}
      className="grid items-center w-screen content-center bg-white bg-opacity-30 backdrop-blur-sm h-fit animate-fade animate-duration-[1500ms] animate-delay-0 animate-normal animate-fill-forwards">
      <Link href="/">
        {" "}
        <div className=" select-none pl-5">
          <Image
            width={150}
            height={80}
            alt="Logo"
            src="img/logoIluminaria.svg"
          />
        </div>
      </Link>
      <ul className={` ${questrial.className} sm:h-full bg-[#d4fcc2] sm:bg-[#f1f1f1] grid text-xl sm:grid-cols-3 sm:px-16 justify-items-center navItem ${isOpen && "open"} sm:mt-0 mt-12`}>
        <li className="grid sm:border sm:border-x items-center justify-items-center sm:w-full sm:h-full w-fit h-fit hover:bg-slate-50 px-8 rounded-3xl duration-300 sm:rounded-none">
          <Link className=" select-none" href="/">
            Inicio
          </Link>
        </li>
        <li className="grid sm:border sm:border-x items-center justify-items-center sm:w-full sm:h-full w-fit h-fit hover:bg-slate-50 px-8 rounded-3xl duration-300 sm:rounded-none">
          <Link className=" select-none" href="/galeria">
            Galeria
          </Link>
          {/* En los Link y Link usamos el atributo 'href' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
        </li>
        <li className="grid sm:border sm:border-x items-center justify-items-center sm:w-full sm:h-full w-fit h-fit hover:bg-slate-50 px-8 rounded-3xl duration-300 sm:rounded-none">
          <Link className=" select-none" href="/contacto">
            Contacto
          </Link>
          {/* En los Link y Link usamos el atributo 'href' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
        </li>
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
