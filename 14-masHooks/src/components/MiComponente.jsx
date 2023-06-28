import { useMayus } from "../hooks/useMayus";

export const MiComponente = () => {
  const { estado, mayusculas, minusculas, concatenar } = useMayus("texto");

  return (
    <>
      <h1>Mi componente</h1>
      <p>{estado}</p>

      <button
        onClick={() => {
          mayusculas();
        }}
      >
        Poner en mayusculas
      </button>
      <button
        onClick={() => {
          minusculas();
        }}
      >
        Poner en minusculas
      </button>
      <button
        onClick={() => {
          concatenar(" agregando un texto");
        }}
      >
        Poner en minusculas
      </button>
    </>
  );
};
