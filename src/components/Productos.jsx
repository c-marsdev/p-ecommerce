import { useState, useEffect } from "react";
import Card from "./Card";
import Carrito from "./Carrito";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  const eliminarDelCarrito = (indiceEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceEliminar));
  };

  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())

      .then((datos) => {
        // console.info(datos);
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al cargar los productos");
        setCargando(false);
      });
  }, []);

  if (cargando) return "Cargando productos...";
  if (error) return <p>{error}</p>;

  return (
    <>
      {productos.map((producto) => (
        <Card
          key={producto.id}
          producto={producto}
          agregarProducto={agregarCarrito}
        />
      ))}
      <Carrito
        productosEnCarrito={carrito}
        productosEliminados={eliminarDelCarrito}
      />
    </>
  );
};
export default Productos;
