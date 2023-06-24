import Proptypes from "prop-types";

export const TercerComponente = ({ nombre, apellido, ficha }) => {
  return (
    <>
      <div>TercerComponente</div>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.grupo}</li>
        <li>{ficha.alergias}</li>
      </ul>
    </>
  );
};

TercerComponente.propTypes = {
  nombre: Proptypes.string,
  apellido: Proptypes.string,
  ficha: Proptypes.object,
};
