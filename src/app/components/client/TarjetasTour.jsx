"use client";
import React from "react";
import Image from "next/image";
import { abel } from "../../ui/fonts.js";
import Link from "next/link";

const TarjetasTour = () => {
  const message = encodeURIComponent("Hola, me interesa consultar por sus servicios.");
  const whatsappUrl = `https://wa.me/+56949866129?text=${message}`;

  return (
    <>
      <h2
        className={`${abel.className} mt-12 pb-4 text-center font-bold text-2xl text-black select-none`}
      >
        Industrias que se benefician
      </h2>
      <div
        className={`${abel.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto px-4 pb-8 text-black`}
      >
        {/* Inmobiliarias */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/inmobiliaria.jpg" fill className="object-cover rounded-xl" alt="Inmobiliaria" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Inmobiliarias/Corredoras</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Disponer de un recorrido virtual 24/7 es una poderosa herramienta para tu negocio,
              permitirá a tus clientes acceder a los inmuebles desde cualquier lugar.
            </span>
          </div>
        </div>

        {/* Turismo */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/turismo.jpg" fill className="object-cover rounded-xl" alt="Turismo" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Turismo/Hotelería</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Demuestra a tus clientes la calidad de tu servicio de manera fidedigna y anticipada,
              generando confianza y marcando la diferencia con la competencia.
            </span>
          </div>
        </div>

        {/* Restaurantes */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/restaurant.jpg" fill className="object-cover rounded-xl" alt="Restaurante" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Restaurantes</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Comparta la calidez de sus espacios y de a conocer a sus potenciales clientes
              la calidad y prestigio de su servicio.
            </span>
          </div>
        </div>

        {/* Museos */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/museum.jpg" fill className="object-cover rounded-xl" alt="Museo" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Museos/Galerías</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Aumente la visibilidad y promueva exposiciones permanentes e itinerantes.
              Deje registro completo de las exhibiciones y genere un espacio virtual interactivo.
            </span>
          </div>
        </div>

        {/* Logo central */}
        <div className="flex items-center justify-center h-60 rounded-xl shadow-md bg-slate-50/30 p-4">
          <Image width={250} height={150} alt="Logo" src="img/logoIluminaria.svg" />
        </div>

        {/* Instituciones Educativas */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/universidad.jpg" fill className="object-cover rounded-xl" alt="Universidad" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Instituciones Educativas</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Permite a los futuros estudiantes conocer y explorar los distintos campus y facultades.
              Aumente el prestigio de su institución dándola a conocer de manera interactiva.
            </span>
          </div>
        </div>

        {/* Industria */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/industria.jpg" fill className="object-cover rounded-xl" alt="Industria" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Industria</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Otorgue confianza a sus socios comerciales exhibiendo sus instalaciones de manera detallada,
              o permita reconocimiento previo para agilizar procesos de incorporación.
            </span>
          </div>
        </div>

        {/* Automotoras */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/automotora.jpg" fill className="object-cover rounded-xl" alt="Automotora" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Automotoras</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Ofrezca una vista detallada de cada vehículo y genere un showroom virtual
              para aumentar sus posibilidades de venta de manera exponencial.
            </span>
          </div>
        </div>

        {/* Aseguradora */}
        <div className="relative h-60 rounded-xl shadow-md overflow-hidden bg-slate-50/30 group hover:scale-105 transition-transform duration-300">
          <Image src="/img/aseguradora.jpg" fill className="object-cover rounded-xl" alt="Aseguradora" />
          <div className="absolute inset-0 rounded-xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center px-6">
            <h3 className="text-xl font-semibold underline select-none text-center">Aseguradora</h3>
            <span className="mt-2 text-sm text-center select-none leading-snug">
              Genere un registro fidedigno y agilice procesos de inspección de propiedades
              y vehículos, o realice comparativas para evaluación de daños.
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center text-black pt-2">
          <Link href={whatsappUrl} className="px-8 py-4 shadow-md text-2xl text-center text-white border-4 border-white font-semibold rounded-full bg-[#4fc359] tracking-[10px] hover:bg-green-400 mb-2">
            <span>Contactar</span>{" "}
          </Link>
        </div>

      </div>
    </>
  );
};

export default TarjetasTour;