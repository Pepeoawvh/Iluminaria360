import "./globals.css";
import { roboto } from "./ui/fonts.js";
import NavBar from "./components/client/NavBar";
import WspButton from "./components/client/WspButton";
import Footer from "./components/client/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} grid bg-white bg-gradient-to-tr`}>
        <NavBar />
        {children}
        <WspButton />
        <Footer />
      </body>
    </html>
  );
}
