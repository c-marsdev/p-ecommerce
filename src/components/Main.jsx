import Card from "./Card.jsx";

const Main = () => {
  return (
    <div className="border-2 m-2">
      <h2>Tienda</h2>
      <div>
        <Card titulo="Producto 1" descripcion="des 1" textoBoton="Agregar" />
        <Card titulo="Productro2" descripcion="des 1" textoBoton="Agregar" />
      </div>
    </div>
  );
};
export default Main;
