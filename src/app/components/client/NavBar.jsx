"use client";
import { questrial } from "../../ui/fonts.js";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/galeria", label: "Galería" },
  { href: "/quienesomos", label: "Quiénes Somos" },
  { href: "/contacto", label: "Contacto" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm animate-fade animate-duration-[1000ms] animate-fill-forwards"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-2 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} className="shrink-0">
          <Image
            width={140}
            height={70}
            alt="Iluminaria360 - Tours Virtuales y Fotografía Arquitectónica"
            src="/img/logoIluminaria.svg"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className={`${questrial.className} hidden sm:flex items-center gap-1`}>
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-xl text-base transition-all duration-300 select-none block ${
                    isActive
                      ? "bg-[#e8fede] text-[#1B2A4A] font-semibold border-b-2 border-[#a6c356]"
                      : "text-gray-700 hover:bg-[#e8fede] hover:text-[#1B2A4A]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger button */}
        <button
          className="sm:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-7 h-[3px] bg-[#a6c356] rounded-full transition-all duration-200 origin-[5px_0px] ${
              isOpen ? "rotate-45 translate-x-[1px]" : ""
            }`}
          />
          <span
            className={`block w-7 h-[3px] bg-[#a6c356] rounded-full transition-all duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-[3px] bg-[#a6c356] rounded-full transition-all duration-200 origin-[5px_0px] ${
              isOpen ? "-rotate-45 translate-x-[1px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <ul className={`${questrial.className} bg-white flex flex-col py-2`}>
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 text-lg transition-colors duration-200 select-none ${
                    isActive
                      ? "bg-[#e8fede] text-[#1B2A4A] font-semibold border-l-4 border-[#a6c356]"
                      : "text-gray-700 hover:bg-[#e8fede]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

