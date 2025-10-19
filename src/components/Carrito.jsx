const Carrito = ({ productosEnCarrito, productosEliminados }) => {
  const total = productosEnCarrito.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {productosEnCarrito.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          {productosEnCarrito.map((producto, indice) => (
            <div key={indice}>
              <img
                src={producto.image}
                alt={producto.title}
                height={80}
                width={80}
              />
              <p>
                {producto.title} : {producto.price}$
              </p>
              <button onClick={() => productosEliminados(indice)}>
                Eliminar
              </button>
            </div>
          ))}
          <p>Total: ${Number(total).toFixed(3)}</p>
        </>
      )}
    </div>
  );
};
export default Carrito;
