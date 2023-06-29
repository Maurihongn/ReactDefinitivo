import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Fetch } from "../../helpers/Fetch";
import { Global } from "../../helpers/Global";

export const CrearPage = () => {
  const { formulario, enviado, cambiado } = useForm({});

  const [resultado, setResultado] = useState("");

  const guardarArticulo = async (e) => {
    e.preventDefault();
    let nuevoArticulo = formulario;

    const { datos } = await Fetch(Global.url + "create", "POST", nuevoArticulo);
    console.log(datos);
    if (datos.status === "success") {
      setResultado("creado");
    } else {
      setResultado("error");
    }

    const fileInput = document.getElementById("file");
    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("creado");

      //subir imagen

      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);

      const subida = await Fetch(
        Global.url + "subir-imagen/" + datos.articulo._id,
        "POST",
        formData,
        true
      );
      console.log(subida.datos);
      if (subida.datos.status === "success") {
        setResultado("creado");
      } else {
        setResultado("error");
      }
    }
  };

  return (
    <div className="jumbo">
      <h1>Crear articulo</h1>
      <p>Formulario para crear un articulo</p>

      <strong>
        {resultado === "creado"
          ? "Articulo creado correctamente"
          : resultado === "error"
          ? "Datos incorrectos"
          : ""}
      </strong>

      {/* Montar formulario de crear articulo   */}

      <form action="" className="formulario" onSubmit={guardarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" onChange={cambiado} />
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} />
        </div>
        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value={"Guardar"} className="btn btn-success" />
      </form>
    </div>
  );
};
