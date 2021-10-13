import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HistEmpOne from "../../assets/emp4.png";
import HistEmpTwo from "../../assets/emp5.png";
import HistEmpThree from "../../assets/emp6.png";
import Arrow from "../../assets/arrow.png";

import "./style.scss";
import { CarouselMain } from "./../../components/CarouselMain/index";
import { Link, useParams } from "react-router-dom";
import { useUpMinerContext } from "../../context";

export function Details() {
  const params = useParams();
  const { getPostById } = useUpMinerContext();
  const post = getPostById(params.id);
  return (
    <div>
      <CarouselMain />
      <div className="sidebar">
        <button className="before">
          <Link to="/">
            <img src={Arrow} alt="Voltar para página inicial" /> Histórico
            Empresarial
          </Link>
        </button>
      </div>

      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        className="details-carousel"
      >
        <div className="slide">
          <img src={HistEmpOne} alt="princesa mononoke" />
        </div>
        <div>
          <img src={HistEmpTwo} alt="princesa do gelo" />
        </div>
        <div>
          <img src={HistEmpThree} alt="princesa Violet Evergarden" />
        </div>
      </Carousel>

      <div className="box">
        <div>
          <p>{post.text}</p>
        </div>
        <div className="price">
          <p>R$</p>
          <h2>{post.price}</h2>
          <button>Habilitar</button>
        </div>
      </div>
    </div>
  );
}
