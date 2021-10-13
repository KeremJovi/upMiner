import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { CarouselMain } from "../../components/CarouselMain";
import Cards from "../../components/Cards";
import Buttons from "../../components/Buttons";

function Home() {
  return (
    <div className="App">
      <CarouselMain />
      <Buttons />
      <Cards />
    </div>
  );
}

export default Home;
