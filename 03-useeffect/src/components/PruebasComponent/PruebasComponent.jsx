import { useEffect, useState } from 'react';
import { AvisoComponent } from './AvisoComponent/AvisoComponent';

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState('Mauri');
  const [contador, setContador] = useState(0);

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  useEffect(() => {
    setContador(contador + 1);
  }, [usuario]);

  return (
    <div>
      <h1>El efecto useEffect</h1>
      <strong>{usuario}</strong>
      <input type='text' onChange={modUsuario} placeholder='cambia el nombre' />

      {usuario === 'Mauricio' && <AvisoComponent />}
    </div>
  );
};
