import { useState } from "react";

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState("Mauricio");

  const cambiarNombre = (e, nombrefijo) => {
    setNombre(nombrefijo);
  };
  return (
    <>
      <h3>Mi primer estado</h3>

      <strong>{nombre}</strong>
      <input
        type="text"
        onChange={(e) => cambiarNombre(e, e.target.value)}
        placeholder="Ingrese su nombre"
      />
      <button onClick={(e) => cambiarNombre(e, "Juan")}>Cambiar estado</button>
    </>
  );
};
