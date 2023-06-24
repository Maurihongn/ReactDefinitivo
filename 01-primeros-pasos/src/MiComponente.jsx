export const MiComponente = () => {
  let usuario = {
    nombre: "Mauricio",
    apellido: "Hongn",
    web: "www.google.com",
  };

  return (
    <>
      <h2>Datos</h2>
      <ul>
        <li>Nombre: {usuario.nombre}</li>
        <li>Apellido: {usuario.apellido}</li>
        <li>Web: {usuario.web}</li>
      </ul>
      <h2>MiComponente</h2>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </>
  );
};
