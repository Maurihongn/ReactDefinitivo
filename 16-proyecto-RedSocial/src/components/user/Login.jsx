import { useState } from "react";
import { Global } from "../../helpers/Globals";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  const { form, changed } = useForm({});
  const [loginStatus, setLoginStatus] = useState("not_loged");
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = async (e) => {
    //Prevenir actualizacion de pantalla
    e.preventDefault();

    //recoger datos del formulario
    let userToLogin = form;

    //Guardar usuario en el backend
    const request = await fetch(Global.url + "user/login", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();
    console.log(data);

    if (data.status === "success") {
      setLoginStatus("loged");
      //Persistir lo datos del usuario en el localstorage osea dejar la sesion guardada

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      setLoginStatus("error");
      setErrorMessage(data.message);
    }
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Login</h1>
      </header>

      <div className="content__posts">
        {loginStatus === "loged" ? (
          <strong className="alert alert-sucess">
            Usuario logueado con éxito redirigiendo...
          </strong>
        ) : loginStatus === "error" ? (
          <strong className="alert alert-danger">{errorMessage}</strong>
        ) : null}
        <form className="form-login" onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input type="submit" value="Login" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
