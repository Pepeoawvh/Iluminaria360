import "./globals.css";
import { roboto } from "./ui/fonts.js";
import NavBar from "./components/client/NavBar";
import HomeBg from "./components/client/HomeBg";
import WspButton from "./components/client/WspButton";
import Footer from "./components/client/Footer";
export default function RootLayout({ children }) {
  return (
    <html className="w-fit" lang="en">
      <body className={`${roboto.className} w-screen antialiased`}>
        <HomeBg />
        <NavBar />
        {children}
        <WspButton/>
        <Footer/>
      </body>
    </html>
  );
}
