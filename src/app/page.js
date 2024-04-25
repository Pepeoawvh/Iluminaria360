import IntroTour from "./components/client/IntroTour";
import PromoBanner from "./components/client/PromoBanner";
import TarjetasTour from "./components/client/TarjetasTour";
export default function Home() {
  return (
    <>
      <div className="flex-col justify-center w-screen bg-white bg-opacity-85 backdrop-blur-sm">
        <PromoBanner />
        <IntroTour />
        <TarjetasTour />
      </div>
    </>
  );
}
