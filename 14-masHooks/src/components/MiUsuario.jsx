import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const MiUsuario = () => {
  const [url, setUrl] = useState("https://reqres.in/api/users/1");

  const { datos, cargando } = useFetch(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);
    setUrl(`https://reqres.in/api/users/${id}`);
  };

  return (
    <>
      <h1>MiUsuario</h1>
      <p>Datos del usuario</p>
      <p>{cargando ? "Cargando..." : ""}</p>
      <p>{datos?.first_name}</p>
      <input type="number" placeholder="Idusuario" name="id" onChange={getId} />
    </>
  );
};
