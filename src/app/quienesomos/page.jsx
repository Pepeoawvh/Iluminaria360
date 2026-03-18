import React from 'react';
import { abel, bebas } from "../ui/fonts";
import Link from "next/link";

export const metadata = {
  title: "Quiénes Somos | Iluminaria360",
  description: "Somos un equipo apasionado por la fotografía y los tours virtuales 360°, comprometidos con mostrar tus espacios de la manera más atractiva e inmersiva.",
};

const message = encodeURIComponent("Hola, me interesa consultar por sus servicios.");
const whatsappUrl = `https://wa.me/+56949866129?text=${message}`;

const VALUES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#a6c356" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: "Calidad Visual",
    description: "Cada imagen es capturada con equipamiento profesional y post-procesada con cuidado para reflejar la esencia de cada espacio.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#a6c356" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Orientados al Resultado",
    description: "Nuestro objetivo es que tu inversión se traduzca en más clientes, mayor confianza y mejor presencia digital.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#a6c356" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Trato Personalizado",
    description: "Trabajamos contigo desde la planificación hasta la entrega final, adaptándonos a las necesidades de tu negocio.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#a6c356" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Entrega Rápida",
    description: "Tours publicados y fotografías entregadas en los plazos acordados. Sin demoras, con excelencia.",
  },
];

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-32 pb-16 px-4 text-white text-center">
        <h1 className={`${bebas.className} text-5xl md:text-6xl mb-4`}>Sobre Iluminaria360</h1>
        <p className={`${abel.className} text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed`}>
          Somos un equipo apasionado por la fotografía y las tecnologías visuales, dedicados a ayudar a negocios a mostrar sus espacios de la manera más atractiva e inmersiva posible.
        </p>
      </section>

      {/* What we do */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={`${bebas.className} text-3xl md:text-4xl text-[#1B2A4A] mb-4`}>
              ¿Qué hacemos?
            </h2>
            <p className={`${abel.className} text-gray-600 leading-relaxed mb-4`}>
              Ofrecemos servicios de{" "}
              <strong className="text-[#1B2A4A]">fotografía arquitectónica</strong> y{" "}
              <strong className="text-[#1B2A4A]">tours virtuales 360°</strong>, diseñados para que tus clientes puedan explorar tus espacios desde cualquier dispositivo y en cualquier momento.
            </p>
            <p className={`${abel.className} text-gray-600 leading-relaxed mb-4`}>
              Si no cuentas con un sitio web, lo desarrollamos para ti con el tour integrado. Si ya tienes uno, lo incorporamos sin modificar tu plataforma actual.
            </p>
            <p className={`${abel.className} text-gray-600 leading-relaxed`}>
              Atendemos a inmobiliarias, restaurantes, hoteles, museos, universidades, automotoras y todo tipo de comercio que quiera destacar en el mundo digital.
            </p>
          </div>
          <div className="bg-[#e8fede] rounded-2xl p-8 border border-[#a6c356]/40">
            <h3 className={`${bebas.className} text-2xl text-[#1B2A4A] mb-3`}>Nuestra Misión</h3>
            <p className={`${abel.className} text-gray-700 leading-relaxed italic text-lg`}>
              &ldquo;Capturar la esencia de cada espacio y transmitirla de manera única, ayudando a los negocios a conectar con sus clientes antes de que crucen la puerta.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${bebas.className} text-3xl md:text-4xl text-[#1B2A4A] text-center mb-10`}>
            Por qué elegirnos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center flex flex-col gap-3"
              >
                <div className="flex justify-center">{icon}</div>
                <h4 className={`${abel.className} font-bold text-[#1B2A4A] text-lg`}>{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center">
        <h2 className={`${bebas.className} text-3xl md:text-4xl text-[#1B2A4A] mb-3`}>
          ¿Listo para destacar tu espacio?
        </h2>
        <p className={`${abel.className} text-gray-500 mb-6 text-lg`}>
          Primera consulta sin compromiso.
        </p>
        <Link
          href={whatsappUrl}
          className="inline-block px-10 py-4 text-xl text-white font-semibold rounded-full bg-[#4fc359] hover:bg-green-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Comenzar Ahora
        </Link>
      </section>
    </div>
  );
}