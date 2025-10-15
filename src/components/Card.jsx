import { Navigate } from "react-router-dom";

const Card = ({ producto }) => {
  const { id, title, price, image } = producto;
  console.log(title);
  return (
    <div
      key={id}
      className="border-2 rounded-xl m-2 flex flex-wrap justify-center"
    >
      <img src={image} alt="Imagen del producto" width="55%" />
      <h2>{title}</h2>
      <p> $ {price}</p>
      <button type="button">Comprar</button>
      <button type="button">
        {/* <Navigate to={`/productos/${id}`}></Navigate> */}
        {/* <Link to={`/productos/${id}`}>Ver más</Link> */}
      </button>
    </div>
  );
};
export default Card;
