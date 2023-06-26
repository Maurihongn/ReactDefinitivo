import { useState } from "react";
import { Empleados } from "./Empleados";

export const Gestion = () => {
  const [nombre, setNombre] = useState("");
  const [pagina, setPagina] = useState(1);

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  };

  return (
    <>
      <h1>Nombre del gestor : {nombre}</h1>
      <input
        type="text"
        onChange={asignarGestor}
        placeholder="Introduce el nombre de gestor"
      />
      <h2>Listado de empleados:</h2>
      <p>Los empleados son gestionados por: {nombre}</p>
      <Empleados pagina={pagina} />

      <button onClick={() => setPagina(1)}>1</button>
      <button onClick={() => setPagina(2)}>2</button>
    </>
  );
};
