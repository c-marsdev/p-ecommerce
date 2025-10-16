import { Link } from "react-router-dom";

const Card = ({ producto, agregarProducto }) => {
  const { id, title, price, image } = producto;

  if (!id || !title || !price || !image) {
    return <p>Datos incompletos del producto</p>;
  }

  console.log(title);
  return (
    <>
      <div className="border-2 rounded-xl m-2 flex flex-wrap justify-center">
        <img src={image} alt="Imagen del producto" width="55%" />
        <h2>{title}</h2>
        <p> $ {price}</p>
        <button type="button" onClick={() => agregarProducto(producto)}>
          Comprar
        </button>
        <Link to={`/productos/${id}`} state={{ producto }}>
          <button type="button">Ver más</button>
        </Link>
      </div>
    </>
  );
};
export default Card;
