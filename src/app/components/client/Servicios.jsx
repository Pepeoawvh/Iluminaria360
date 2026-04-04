import React from "react";
import { abel, bebas } from "../../ui/fonts.js";
import Link from "next/link";

const SERVICES = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Tour Virtual 360°",
    description:
      "Fotografía panorámica profesional con publicación en plataforma Panoee. Tus clientes recorren tus espacios desde cualquier lugar, 24/7, sin necesidad de descargar nada.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    title: "Fotografía Arquitectónica",
    description:
      "Sesiones profesionales que capturan la esencia y los detalles de cada espacio. Imágenes de alta calidad para marketing, catálogos, redes sociales y portafolios comerciales.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    title: "Sitio Web con Tour Integrado",
    description:
      "Diseñamos y desarrollamos tu sitio web completo con el tour virtual incorporado desde el inicio. Presencia digital profesional, sin necesidad de contratar a terceros.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    title: "Tour en tu Sitio Existente",
    description:
      "¿Ya tienes sitio web? Incorporamos el tour virtual en tu plataforma actual. Integración limpia y rápida sin modificar lo que ya tienes funcionando.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Video Inmobiliario",
    description:
      "Producción de video profesional en interior y exterior. Mostramos el entorno, accesos y ubicación de tu propiedad o comercio con una producción de alto impacto.",
  },
];

const message = encodeURIComponent("Hola, me interesa consultar por sus servicios.");
const whatsappUrl = `https://wa.me/+56949866129?text=${message}`;

const Servicios = () => {
  return (
    <section className="bg-[#1B2A4A] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`${bebas.className} text-4xl md:text-5xl text-white mb-3`}>
            Nuestros Servicios
          </h2>
          <p className={`${abel.className} text-gray-300 text-lg max-w-2xl mx-auto`}>
            Soluciones visuales completas para que tu negocio destaque en el mundo digital.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 items-stretch">
          {SERVICES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a6c356]/60 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-[#a6c356] shrink-0">{icon}</div>
              <h3 className={`${abel.className} text-xl font-bold text-white shrink-0`}>{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-[#a6c356]/10 border-2 border-[#a6c356]/50 text-center col-span-1 sm:col-span-2 lg:col-span-1">
            <p className={`${abel.className} text-white text-lg`}>¿No encuentras lo que buscas?</p>
            <p className="text-gray-300 text-sm">
              Cuéntanos tu proyecto y encontramos la solución ideal.
            </p>
            <Link
              href={whatsappUrl}
              className="mt-2 px-6 py-3 bg-[#a6c356] text-[#1B2A4A] font-bold rounded-full hover:bg-[#b8d468] transition-colors duration-300 text-sm"
            >
              Consultar ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
