const Button = ({ tipo, texto }) => {
  return (
    <>
      <button type={tipo}>{texto}</button>
    </>
  );
};
export { Button };
