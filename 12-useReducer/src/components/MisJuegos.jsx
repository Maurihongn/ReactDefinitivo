import { useEffect, useReducer } from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('juegos')) || [];
};

export const MisJuegos = () => {
  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('juegos', JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    const action = {
      type: 'crear',
      payload: juego,
    };

    dispatch(action);
  };

  const borrarJuego = (id) => {
    const action = {
      type: 'borrar',
      payload: id,
    };

    dispatch(action);
  };

  return (
    <>
      <h1>Estos son mis juegos</h1>
      <p>numero de videojuegos : {juegos.length}</p>

      <ul>
        {juegos.map((juego) => (
          <li key={juego.id}>
            {juego.titulo}
            &nbsp;
            <button onClick={() => borrarJuego(juego.id)}>x</button>
          </li>
        ))}
      </ul>

      <h3>Agregar juego</h3>

      <form action='' onSubmit={conseguirDatosForm}>
        <input type='text' name='titulo' placeholder='Titulo' />
        <textarea name='descripcion' id='' cols='30' rows='10'></textarea>
        <input type='submit' value='Guardar' />
      </form>
    </>
  );
};
