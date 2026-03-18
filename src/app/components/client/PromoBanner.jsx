'use client'
import React from "react";
import Link from "next/link.js";
import VideoBanner from "./VideoBanner";
import { abel, bebas } from "../../ui/fonts.js";

const PromoBanner = () => {
  return (
    <div className="grid sm:grid-cols-2 items-center gap-6 max-w-7xl mx-auto w-full px-4 md:px-8 pt-28 pb-10">
      {/* Video side */}
      <Link href="#homeTour" scroll={true} className="block h-72 sm:h-96 md:h-[480px]">
        <VideoBanner />
      </Link>

      {/* Text side */}
      <div className="flex flex-col gap-5 text-gray-900 animate-fade animate-duration-[1500ms] animate-fill-forwards">
        <h1 className={`${bebas.className} text-5xl md:text-6xl text-[#1B2A4A] leading-tight drop-shadow-sm`}>
          Tu negocio merece ser explorado
        </h1>
        <p className={`${abel.className} text-lg text-gray-600 leading-relaxed`}>
          Fotografía arquitectónica y tours virtuales 360° que conectan a tus clientes con tus espacios antes de que crucen la puerta.
        </p>
        <ul className={`${abel.className} flex flex-col gap-2 text-base text-gray-700`}>
          <li className="flex items-center gap-2"><span className="text-[#4fc359] font-bold">✓</span> Disponible 24/7 desde cualquier dispositivo</li>
          <li className="flex items-center gap-2"><span className="text-[#4fc359] font-bold">✓</span> Aumenta la confianza y reduce visitas innecesarias</li>
          <li className="flex items-center gap-2"><span className="text-[#4fc359] font-bold">✓</span> Fácil de compartir en redes y WhatsApp</li>
          <li className="flex items-center gap-2"><span className="text-[#4fc359] font-bold">✓</span> Experiencia inmersiva y personalizable</li>
        </ul>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="#homeTour"
            scroll={true}
            className={`${bebas.className} px-7 py-3 text-lg tracking-widest rounded-full bg-[#1B2A4A] text-white hover:bg-[#263d6e] shadow hover:-translate-y-0.5 transition-all duration-300`}
          >
            Ver Demo
          </Link>
          <Link
            href="/contacto"
            className={`${bebas.className} px-7 py-3 text-lg tracking-widest rounded-full border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#e8fede] transition-all duration-300`}
          >
            Cotizar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

