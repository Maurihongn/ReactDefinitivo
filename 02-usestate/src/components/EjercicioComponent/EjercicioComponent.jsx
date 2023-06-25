import { useState } from 'react';
import Proptypes from 'prop-types';

export const EjercicioComponent = ({ year }) => {
  const [yearNow, setyearNow] = useState(year);

  const sumarYear = () => {
    setyearNow(yearNow + 1);
  };
  const restarYear = () => {
    setyearNow(yearNow - 1);
  };
  const cambiarYear = (e) => {
    let dato = parseInt(e.target.value);
    if (Number.isInteger(dato)) {
      setyearNow(dato);
    } else {
      setyearNow(year);
    }
  };

  return (
    <div>
      <h2>Ejercicios con evento y usestate</h2>
      <strong>{yearNow}</strong>
      <input type='text' placeholder='Coloca el año' onChange={cambiarYear} />
      <div>
        <button onClick={sumarYear}>siguiente</button>
        <button onClick={restarYear}>anterior</button>
      </div>
    </div>
  );
};

EjercicioComponent.propTypes = {
  year: Proptypes.number.isRequired,
};
