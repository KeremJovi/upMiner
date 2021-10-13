import All from "../assets/all.png";
import Folder from "../assets/folder.png";
import Greece from "../assets/greece.png";
import Tree from "../assets/tree.png";
import Hammer from "../assets/hammer.png";
import Block from "../assets/block.png";
import Planet from "../assets/planet.png";
import Jewel from "../assets/jewel.png";
import Human from "../assets/human.png";
import Pork from "../assets/pork.png";

import React, { createContext, useContext, useState } from "react";

const UpMinerContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [postList] = useState(postMock);
  const getPostById = (id) => {
    return postList.filter((item) => (item.id = id))[0];
  };

  return (
    <UpMinerContext.Provider value={{ postList, getPostById }}>
      {children}
    </UpMinerContext.Provider>
  );
};

export const useUpMinerContext = () => {
  if (!UpMinerContext)
    throw new Error("Esse método não pode ser chamado fora do UpMinerContext");
  return useContext(UpMinerContext);
};

const postMock = [
  {
    id: 1,
    img: All,
    title: "Todos",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 29.9,
    data: "20 out 2020",
  },
  {
    id: 2,
    img: Folder,
    title: "Profissional",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 29.9,
    data: "10 out 2020",
  },
  {
    id: 3,
    img: Greece,
    title: "Reguladores",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 30.5,
    data: "30 set 2020",
  },
  {
    id: 4,
    img: Tree,
    title: "Sócio Ambiental",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 80,
    data: "20 set 2020",
  },
  {
    id: 5,
    img: Hammer,
    title: "Jurídico",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 40.0,
    data: "10 set 2020",
  },
  {
    id: 6,
    img: Block,
    title: "Listas Restritivas",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 39.5,
    data: "30 ago 2020",
  },
  {
    id: 7,
    img: Planet,
    title: "Mídia / Internet",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 50,
    data: "20 ago 2020",
  },
  {
    id: 8,
    img: Jewel,
    title: "Bens e Imóveis",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 60,
    data: "10 ago 2020",
  },
  {
    id: 9,
    img: Human,
    title: "Cadastro",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 55,
    data: "30 jul 2020",
  },
  {
    id: 10,
    img: Pork,
    title: "Financeiro",
    text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que sao publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas(LTDA) de grande porte.",
    price: 70,
    data: "20 jul 2020",
  },
];
