import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HistEmpOne from "../../assets/hist-emp.jpg";
import HistEmpTwo from "../../assets/hist-emp2.png";
import HistEmpThree from "../../assets/hist-emp3.jpg";

import "./style.scss";
import { CarouselMain } from "./../../components/CarouselMain/index";

export function Details() {
  return (
    <div>
      <CarouselMain />
      <button>voltar</button>
      <h1>Histórico Empresarial</h1>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        className="details-carousel"
      >
        <div>
          <img src={HistEmpOne} alt="princesa mononoke" />
        </div>
        <div>
          <img src={HistEmpTwo} alt="princesa do gelo" />
        </div>
        <div>
          <img src={HistEmpThree} alt="princesa Violet Evergarden" />
        </div>
      </Carousel>
    </div>
  );
}
