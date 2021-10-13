import "./style.scss";

import React from "react";
import { PostCard } from "../PostCard";

const ListCards = ({ onSelectChange, filtedPostList }) => {
  return (
    <div>
      <div className="order">
        <p>Ordenar</p>
        <select onChange={onSelectChange}>
          <option value="todos" defaultValue>
            Todos
          </option>
          <option value="lançamento">Lançamento</option>
          <option value="preço">Preço</option>
        </select>
      </div>

      <section className="container">
        <div className="all-cards">
          {filtedPostList.map((card) => (
            <div key={card.id}>
              <PostCard
                key={card.id}
                id={card.id}
                img={card.img}
                title={card.title}
                text={card.text}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListCards;
