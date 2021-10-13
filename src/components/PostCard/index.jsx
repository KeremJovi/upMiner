export const PostCard = ({ id, img, title, text, price }) => {
  return (
    <>
      <div className="one-cards">
        <img src={img} alt={title} />
        <div className="card-content">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <section className="info">
          <p>{price}</p>
          <button>Saiba Mais</button>
        </section>
      </div>
    </>
  );
};
