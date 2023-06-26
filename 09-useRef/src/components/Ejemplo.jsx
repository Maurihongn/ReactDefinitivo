import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Ejemplo = () => {
  const [numeroSaludo, setNumeroSaludo] = useState(0);

  const saludosEnCola = useRef(numeroSaludo);

  useEffect(() => {
    saludosEnCola.current = numeroSaludo;
    setTimeout(() => {
      console.log("Mensajes en cola" + saludosEnCola.current);
    }, 2000);
  }, [numeroSaludo]);

  const enviarSaludo = () => {
    setNumeroSaludo(numeroSaludo + 1);
    console.log("enviarSaludo");
  };

  return (
    <>
      <h1>Ejemplo con useRef</h1>

      <h2>Saludos enviados:{numeroSaludo}</h2>

      <button onClick={enviarSaludo}>Enviar Saludos</button>
    </>
  );
};
