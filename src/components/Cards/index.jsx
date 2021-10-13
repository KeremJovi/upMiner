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

import "../Cards/style.scss";

import { Component } from "react";
import { PostCard } from "../PostCard";

class Cards extends Component {
  state = {
    card: [
      {
        id: 1,
        img: All,
        title: "Todos",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 2,
        img: Folder,
        title: "Profissional",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 3,
        img: Greece,
        title: "Reguladores",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 4,
        img: Tree,
        title: "Sócio Ambiental",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 5,
        img: Hammer,
        title: "Jurídico",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 6,
        img: Block,
        title: "Listas Restritivas",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 7,
        img: Planet,
        title: "Mídia / Internet",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 8,
        img: Jewel,
        title: "Bens e Imóveis",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 9,
        img: Human,
        title: "Cadastro",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
      {
        id: 10,
        img: Pork,
        title: "Financeiro",
        text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
        price: "R$29,90",
      },
    ],
  };

  render() {
    const { card } = this.state;

    return (
      <section className="container">
        <div className="all-cards">
          {card.map((card) => (
            <>
              <PostCard
                key={card.id}
                id={card.id}
                img={card.img}
                title={card.title}
                text={card.text}
                price={card.price}
              />
            </>
          ))}
        </div>
      </section>
    );
  }
}

// export default function Cards() {
//   const { cards } = this.state;
//   return (
//     <div>
//       <div className="selector">
//         <p>Ordenar</p>
//         <select>
//           <option>Lançamento</option>
//           <option>Preço</option>
//         </select>

//         <div>
//           {cards.map((card) => (
//             <h1>{cards.title}</h1>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Cards;
