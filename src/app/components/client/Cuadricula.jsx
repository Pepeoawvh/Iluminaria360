"use client";
import React from "react";
import Image from "next/image";
import { abel, bebas } from "../../ui/fonts.js";
import Link from "next/link.js";

const TOURS = [
  {
    href: "/guiadepto",
    src: "/img/thumbBilbao.jpg",
    alt: "Tour virtual de departamento en Quilpué",
    label: "Departamento",
    desc: "Quilpué, V Región",
  },
  {
    href: "/guiacasa",
    src: "/img/thumbAvRetiro.jpg",
    alt: "Tour virtual de casa Av. El Retiro",
    label: "Casa",
    desc: "Av. El Retiro",
  },
  {
    href: "/guiapaseo",
    src: "/img/thumbZapallar.jpg",
    alt: "Tour virtual de paseo en Zapallar",
    label: "Paseo",
    desc: "Zapallar, V Región",
  },
  {
    href: "/guiaecoaldea",
    src: "/img/thumbEcoAldea.jpg",
    alt: "Tour virtual EcoAldea Panal del Mar",
    label: "EcoAldea",
    desc: "Panal del Mar",
  },
];

const Cuadricula = () => {
  return (
    <div className="bg-white w-full pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className={`${bebas.className} text-4xl md:text-5xl text-[#1B2A4A] mb-2`}>
            Galería de Tours Virtuales
          </h1>
          <p className={`${abel.className} text-gray-500 text-lg`}>
            Explora nuestras muestras y descubre la experiencia inmersiva que ofrecemos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade animate-duration-[1500ms] animate-fill-forwards">
          {TOURS.map(({ href, src, alt, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="group relative rounded-2xl overflow-hidden shadow-md h-64 bg-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={src}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                alt={alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className={`${abel.className} text-xl font-bold`}>{label}</h3>
                <p className="text-sm text-gray-200">{desc}</p>
                <span className="inline-block mt-1 text-[#a6c356] text-xs font-semibold group-hover:underline">
                  Ver tour 360° →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuadricula;