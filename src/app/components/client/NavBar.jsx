"use client";
import { Manrope } from "next/font/google";
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
        <div className=" pl-5">
          <Image
            width={200}
            height={90}
            alt="Logo"
            src="img/logoIluminaria.svg"
          />
        </div>
      </Link>
      <ul className={`navItem ${isOpen && "open"} sm:mt-0 mt-12`}>
        <li>
          <Link className="" href="/">
            Inicio
          </Link>
        </li>

        <li>
          <Link className="" href="/contacto">
            Portafolio
          </Link>
          {/* En los Link y Link usamos el atributo 'href' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
        </li>
        <li>
          <Link className="" href="/contacto">
            Quiénes Somos
          </Link>
          {/* En los Link y Link usamos el atributo 'href' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
        </li>
        <li>
          <Link className="" href="/contacto">
            Quiénes Somos
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
