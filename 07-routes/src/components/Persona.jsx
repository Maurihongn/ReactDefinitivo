import { useNavigate, useParams } from 'react-router-dom';

export const Persona = () => {
  let { nombre = 'Desconocido', apellido = 'Desconocido' } = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;

    navegar(`/persona/${nombre}/${apellido}`);
  };

  return (
    <>
      <h1>
        Esta es la pagina de {nombre} {apellido}
      </h1>
      <p>Pagina de persona</p>

      <form action='' onSubmit={enviar}>
        <input type='text' name='nombre' placeholder='Nombre' />
        <input type='text' name='apellido' placeholder='Apellido' />
        <input type='submit' name='enviar' value='Enviar' />
      </form>
    </>
  );
};
