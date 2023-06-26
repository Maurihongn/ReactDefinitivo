import { useRef } from "react";

export const Formulario = () => {
  const nombreInput = useRef("Mauricio");
  const apellidoInput = useRef("Hongn");
  const emailInput = useRef("mauricio@correo.com");
  return (
    <>
      <h1>Formulario</h1>
      <form action="">
        <input type="text" placeholder="Nombre" ref={nombreInput} />
        <input type="text" placeholder="Apellido" ref={apellidoInput} />
        <input type="email" placeholder="Email" ref={emailInput} />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
