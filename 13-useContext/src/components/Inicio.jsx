import { useContext, useEffect } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Inicio = () => {
  const compartido = useContext(PruebaContext);

  useEffect(() => {
    console.log(compartido);
  }, []);

  return (
    <>
      <h1>Inicio</h1>
      <p>Pagina de Inicio</p>
    </>
  );
};
