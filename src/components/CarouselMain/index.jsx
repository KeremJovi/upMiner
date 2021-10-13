import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import princeMononoke from "../../assets/mononoke.jpg";
import princeIce from "../../assets/princeIce.jpg";
import princeViolet from "../../assets/VioletEvergarden.jpg";
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
          <img src={princeMononoke} alt="princesa mononoke" />
        </div>
        <div>
          <img src={princeIce} alt="princesa do gelo" />
        </div>
        <div>
          <img src={princeViolet} alt="princesa Violet Evergarden" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselMain;
