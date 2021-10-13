import All from "../../assets/all.png";
import Folder from "../../assets/folder.png";
import Greece from "../../assets/greece.png";
import Tree from "../../assets/tree.png";
import Hammer from "../../assets/hammer.png";
import Block from "../../assets/block.png";
import Planet from "../../assets/planet.png";
import Jewel from "../../assets/jewel.png";
import Human from "../../assets/human.png";
import Pork from "../../assets/pork.png";

import "./style.scss";

export function Buttons() {
  return (
    <div className="sideBar">
      <button className="buttons">
        <div className="contents">
          <img src={All} alt="Todos" />
          <p>Todos</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Folder} alt="Profissional" />
          <p>Profissional</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Greece} alt="Reguladores" />
          <p>Reguladores</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Tree} alt="Sócio Ambiental" />
          <p>Sócio Ambiental</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Hammer} alt="Jurídico" />
          <p>Jurídico</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Block} alt="Listas Restritivas" />
          <p>Listas Restritivas</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Planet} alt="Mídia / Internet" />
          <p>Mídia / Internet</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Jewel} alt="Bens e Imóveis" />
          <p>Bens e Imóveis</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Human} alt="Cadastro" />
          <p>Cadastro</p>
        </div>
      </button>
      <button className="buttons">
        <div className="contents">
          <img src={Pork} alt="Financeiro" />
          <p>Financeiro</p>
        </div>
      </button>
    </div>
  );
}
export default Buttons;
