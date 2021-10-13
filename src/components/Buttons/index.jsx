import All from "../../assets/all.png";

import "./style.scss";

export function Buttons({ buttonList, onButtonClick, onClearFilter }) {
  return (
    <div className="sideBar">
      {buttonList.map((item) => (
        <button className="buttons" onClick={() => onButtonClick(item.id)}>
          <div className="contents">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        </button>
      ))}
      <button className="buttons" onClick={() => onClearFilter()}>
        <div className="contents">
          <img src={All} alt="todos" />
          <p>Todos</p>
        </div>
      </button>
    </div>
  );
}
export default Buttons;
