import { useState } from "react";
export const useMayus = (text) => {
  const [miTexto, setMiTexto] = useState(text);
  const mayusculas = () => {
    setMiTexto(text.toUpperCase());
  };

  const minusculas = () => {
    setMiTexto(text.toLowerCase());
  };

  const concatenar = (added) => {
    setMiTexto(text + added);
  };

  return { estado: miTexto, mayusculas, minusculas, concatenar };
};
