import { useState } from "react";
import { Global } from "../../helpers/Globals";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_saved");
  const [errorMessage, setErrorMessage] = useState("");

  const saveUser = async (e) => {
    //Prevenir actualizacion de pantalla
    e.preventDefault();

    //recoger datos del formulario
    let newUser = form;

    //Guardar usuario en el backend
    const request = await fetch(Global.url + "user/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();
    console.log(data);

    if (data.status === "success") {
      setSaved("saved");
    } else {
      setSaved("error");
      setErrorMessage(data.message);
    }
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      <div className="content__posts">
        {saved === "saved" ? (
          <strong className="alert alert-sucess">
            Usuario registrado con éxito
          </strong>
        ) : saved === "error" ? (
          <strong className="alert alert-danger">{errorMessage}</strong>
        ) : null}
        {/* <strong>
          {saved === "saved"
            ? "Usuario registrado con éxito"
            : saved === "error"
            ? errorMessage
            : ""}
        </strong> */}

        <form className="register-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellido</label>
            <input type="text" name="surname" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input
            type="submit"
            value="Registrarse"
            className="btn btn-success"
          />
        </form>
      </div>
    </>
  );
};
