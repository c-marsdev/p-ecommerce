import { Button } from "./Button";

const Card = ({ titulo, descripcion, textoBoton }) => {
  return (
    <div className="border-2 m-2">
      <img src="" alt="Imagendel producto" srcset="" />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <Button tipo="button" texto={textoBoton} />
    </div>
  );
};
export default Card;
