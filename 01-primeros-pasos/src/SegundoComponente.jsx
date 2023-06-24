export const SegundoComponente = () => {
  const libros = [
    "Harry Potter",
    "Juego de tronos",
    "El señor de los anillos",
    "El hobbit",
  ];
  // const libros = [];
  return (
    <>
      <h2>Segundo componente</h2>
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </>
  );
};
