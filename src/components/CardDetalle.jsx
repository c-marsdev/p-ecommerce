const CardDetalle = ({ producto }) => {
  const { id, title, price, description, category, image, rating } = producto;
  console.log(title);

  return (
    <div
      key={id}
      className="border-2 rounded-xl m-2 flex flex-wrap justify-center"
    >
      <img src={image} alt="Imagen del producto" width="55%" />
      <h2>{title}</h2>
      <p> $ {price}</p>
      <p>{category}</p>
      <p>{rating.rate}</p>
      <p className="text-start">{description}</p>
      <button type="button">Volver</button>
    </div>
  );
};
export default CardDetalle;
