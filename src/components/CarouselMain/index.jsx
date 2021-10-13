import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import EmpOne from "../../assets/emp1.png";
import EmpTwo from "../../assets/emp2.png";
import EmpThree from "../../assets/emp3.png";
import "./style.scss";

export function CarouselMain() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={4000}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        className="carousel"
      >
        <div>
          <img src={EmpOne} alt="princesa mononoke" />
        </div>
        <div>
          <img src={EmpTwo} alt="princesa do gelo" />
        </div>
        <div>
          <img src={EmpThree} alt="princesa Violet Evergarden" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselMain;
