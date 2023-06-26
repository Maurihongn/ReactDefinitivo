import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <>
      <h1>Esta es la pagina de error</h1>
      <p>Pagina de error</p>
      <Link to={'/inicio'}> Ir al inicio</Link>
    </>
  );
};
