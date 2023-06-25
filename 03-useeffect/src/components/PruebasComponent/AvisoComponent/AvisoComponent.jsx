import { useEffect } from 'react';

export const AvisoComponent = () => {
  useEffect(() => {
    alert('el componente esta montado');

    //PARA CUANDO EL COMPONENTE SE DESMONTA
    return () => {
      alert('componente desmontado');
    };
  }, []);

  return (
    <div>
      <h3>Hemos superado los 20 cambios</h3>
      <button
        onClick={() => {
          alert('Hemos superado los 20 cambios');
        }}
      >
        Mostrar Alerta
      </button>
    </div>
  );
};
