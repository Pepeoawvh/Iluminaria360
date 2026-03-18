import React from 'react';
import { abel, bebas } from "../ui/fonts";
import Link from "next/link";

const message = encodeURIComponent(
  "Hola, me interesa consultar por sus servicios de tour virtual y fotografía."
);
const whatsappUrl = `https://wa.me/+56949866129?text=${message}`;

export const metadata = {
  title: "Contacto | Iluminaria360",
  description: "Contáctanos para cotizar tu tour virtual 360° o sesión de fotografía arquitectónica.",
};

export default function PageContacto() {
  return (
    <section className="min-h-screen bg-white pt-28 pb-16 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className={`${bebas.className} text-5xl md:text-6xl text-[#1B2A4A] mb-4`}>
          Contáctanos
        </h1>
        <p className={`${abel.className} text-lg text-gray-500`}>
          Cuéntanos sobre tu proyecto y te respondemos a la brevedad.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        {/* WhatsApp */}
        <Link
          href={whatsappUrl}
          className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl border-2 border-[#a6c356] hover:border-[#4fc359] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          <div className="w-16 h-16 rounded-full bg-[#e8fede] flex items-center justify-center group-hover:bg-[#4fc359] transition-colors duration-300">
            <svg className="w-8 h-8 text-[#4fc359] group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <h3 className={`${abel.className} text-xl font-bold text-[#1B2A4A] mb-1`}>WhatsApp</h3>
            <p className="text-gray-500 text-sm">+56 9 4986 6129</p>
            <p className="text-[#4fc359] text-sm font-semibold mt-2">Escribir ahora →</p>
          </div>
        </Link>

        {/* Zona */}
        <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border-2 border-gray-200 bg-white">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#1B2A4A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div>
            <h3 className={`${abel.className} text-xl font-bold text-[#1B2A4A] mb-1`}>Zona de Servicio</h3>
            <p className="text-gray-500 text-sm">Valparaíso</p>
            <p className="text-gray-500 text-sm">Región Metropolitana</p>
            <p className="text-gray-400 text-xs mt-2">Otros destinos a coordinar</p>
          </div>
        </div>

        {/* Tiempo */}
        <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border-2 border-gray-200 bg-white">
          <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
            <svg className="w-8 h-8 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>
            <h3 className={`${abel.className} text-xl font-bold text-[#1B2A4A] mb-1`}>Tiempo de Respuesta</h3>
            <p className="text-gray-500 text-sm">Respondemos en menos de</p>
            <p className="text-[#1B2A4A] text-3xl font-bold mt-1">24 hrs</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-lg mx-auto text-center">
        <p className={`${abel.className} text-gray-400 text-sm mb-5`}>
          ¿Tienes dudas sobre el servicio que necesitas? Te asesoramos sin compromiso.
        </p>
        <Link
          href={whatsappUrl}
          className="inline-block px-10 py-4 text-xl text-white font-semibold rounded-full bg-[#4fc359] hover:bg-green-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Consultar por WhatsApp
        </Link>
      </div>
    </section>
  );
}