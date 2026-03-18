import React from "react";
import { abel, bebas } from "../../ui/fonts.js";
import Link from "next/link";

const PLANS = [
  {
    name: "Básico",
    badge: null,
    price: "Desde $150.000",
    currency: "CLP",
    description: "Ideal para comenzar con presencia digital de calidad.",
    features: [
      "Sesión fotográfica 360°",
      "Tour virtual publicado en Panoee",
      "Enlace compartible (redes, WhatsApp)",
      "Hasta 10 escenas",
      "Soporte por 3 meses",
    ],
    notIncluded: ["Fotografía arquitectónica plana", "Desarrollo de sitio web", "Video / Drone"],
    cta: "Consultar plan Básico",
    highlight: false,
    waMsg: "Hola, me interesa el plan Básico de tour virtual. ¿Podrían darme más información?",
  },
  {
    name: "Profesional",
    badge: "Más popular",
    price: "Desde $280.000",
    currency: "CLP",
    description: "La solución completa para comercios y corredoras.",
    features: [
      "Sesión fotográfica 360°",
      "Tour virtual publicado en Panoee",
      "Fotografía arquitectónica plana",
      "Hasta 20 escenas",
      "Integración en sitio web existente",
      "Soporte por 6 meses",
    ],
    notIncluded: ["Desarrollo de sitio web desde cero", "Video / Drone"],
    cta: "Consultar plan Profesional",
    highlight: true,
    waMsg: "Hola, me interesa el plan Profesional. ¿Podrían darme más información?",
  },
  {
    name: "Premium",
    badge: null,
    price: "A cotizar",
    currency: "",
    description: "Sitio web + tour + video para el máximo impacto digital.",
    features: [
      "Sesión fotográfica 360°",
      "Tour virtual publicado en Panoee",
      "Fotografía arquitectónica plana",
      "Escenas ilimitadas",
      "Desarrollo de sitio web completo",
      "Video inmobiliario / Drone",
      "Soporte por 12 meses",
    ],
    notIncluded: [],
    cta: "Solicitar cotización",
    highlight: false,
    waMsg: "Hola, me interesa el plan Premium. ¿Podrían enviarme una cotización personalizada?",
  },
];

const Precios = () => {
  return (
    <section className="bg-[#1B2A4A] py-16 px-4 border-b-4 border-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`${bebas.className} text-4xl md:text-5xl text-white mb-3`}>
            Planes y Precios
          </h2>
          <p className={`${abel.className} text-gray-300 text-lg max-w-xl mx-auto`}>
            Precios referenciales. Cada proyecto es único — cotizamos según tus necesidades reales.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map(({ name, badge, price, currency, description, features, notIncluded, cta, highlight, waMsg }) => {
            const waUrl = `https://wa.me/+56949866129?text=${encodeURIComponent(waMsg)}`;
            return (
              <div
                key={name}
                className={`relative flex flex-col rounded-2xl p-8 border-2 transition-all duration-300 ${
                  highlight
                    ? "border-[#a6c356] bg-white shadow-xl shadow-[#a6c356]/20 md:scale-[1.03]"
                    : "border-gray-200 bg-white hover:border-[#a6c356]/60 hover:shadow-md"
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#a6c356] text-[#1B2A4A] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {badge}
                  </span>
                )}

                <h3 className={`${bebas.className} text-3xl text-[#1B2A4A] mb-1`}>{name}</h3>
                <div className="mb-2">
                  <span className={`${abel.className} text-2xl font-bold text-[#1B2A4A]`}>{price}</span>
                  {currency && <span className="text-gray-400 text-sm ml-1">{currency}</span>}
                </div>
                <p className="text-gray-500 text-sm mb-5">{description}</p>

                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#4fc359] mt-0.5 shrink-0 font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                  {notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0">✗</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={waUrl}
                  className={`text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    highlight
                      ? "bg-[#a6c356] text-[#1B2A4A] hover:bg-[#b8d468]"
                      : "bg-[#1B2A4A] text-white hover:bg-[#263d6e]"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className={`${abel.className} text-center text-gray-400 text-xs mt-6`}>
          * Precios referenciales en pesos chilenos. Se emite cotización formal al acordar el alcance del proyecto.
        </p>
      </div>
    </section>
  );
};

export default Precios;
