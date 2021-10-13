import { useHistory } from "react-router-dom";

export const PostCard = ({ id, img, title, text, price }) => {
  const { push } = useHistory();

  return (
    <>
      <div className="one-cards">
        <img src={img} alt={title} />
        <div className="card-content">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <section className="info">
          <p>{price.toFixed(2)}</p>
          <button
            onClick={() => {
              push(`/Details/${id}`);
            }}
          >
            Saiba Mais
          </button>
        </section>
      </div>
    </>
  );
};
