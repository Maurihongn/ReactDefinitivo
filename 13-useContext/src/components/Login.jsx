import { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Login = () => {
  const { setUsuario } = useContext(PruebaContext);

  const guardarDatos = (e) => {
    e.preventDefault();

    let usuario = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value,
    };

    setUsuario(usuario);
  };
  return (
    <>
      <h1>Login</h1>
      <p>Pagina de login</p>

      <form action="" onSubmit={guardarDatos}>
        <input type="text" name="nick" placeholder="Nickname" />
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="web" placeholder="Web" />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
