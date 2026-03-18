import "./globals.css";
import { roboto } from "./ui/fonts.js";
import NavBar from "./components/client/NavBar";
import WspButton from "./components/client/WspButton";
import Footer from "./components/client/Footer";

export const metadata = {
  title: "Iluminaria360 | Tours Virtuales y Fotografía Arquitectónica",
  description:
    "Servicio profesional de fotografía arquitectónica y tours virtuales 360° para inmobiliarias, restaurantes, hoteles, museos y todo comercio que quiera destacar. Desarrollamos tu sitio web o integramos el tour en el tuyo.",
  keywords: [
    "tour virtual 360",
    "fotografía arquitectónica",
    "tours virtuales Chile",
    "fotografía comercial",
    "inmobiliaria",
    "turismo",
    "Chile",
  ],
  openGraph: {
    title: "Iluminaria360 | Tours Virtuales 360° y Fotografía Arquitectónica",
    description:
      "Potencia tu negocio con tours virtuales inmersivos y fotografía arquitectónica profesional.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.className} bg-white`}>
        <NavBar />
        <main className="overflow-x-hidden">{children}</main>
        <WspButton />
        <Footer />
      </body>
    </html>
  );
}
