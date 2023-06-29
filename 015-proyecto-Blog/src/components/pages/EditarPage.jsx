import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Fetch } from "../../helpers/Fetch";
import { Global } from "../../helpers/Global";
import { useParams } from "react-router-dom";

export const EditarPage = () => {
  const { formulario, enviado, cambiado } = useForm({});

  const [articulo, setArticulo] = useState({});
  const [resultado, setResultado] = useState("");
  const params = useParams();

  const editarArticulo = async (e) => {
    e.preventDefault();
    let nuevoArticulo = formulario;

    const { datos } = await Fetch(
      Global.url + "article/" + params.id,
      "PUT",
      nuevoArticulo
    );
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

  useEffect(() => {
    conseguirArticulo();
  }, []);
  useEffect(() => {
    console.log(articulo);
  }, [articulo]);

  const conseguirArticulo = async () => {
    const url = Global.url + "article/" + params.id;

    const { datos } = await Fetch(url, "GET");

    // let peticion = await fetch(url, {
    //   method: 'GET',
    // });

    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    } else {
      setArticulo({});
    }
  };

  return (
    <div className="jumbo">
      <h1>Editar articulo</h1>
      <p>Formulario para editar un articulo: {articulo.titulo}</p>

      <strong>
        {resultado === "creado"
          ? "Articulo editado correctamente"
          : resultado === "error"
          ? "Datos incorrectos"
          : ""}
      </strong>

      {/* Montar formulario de crear articulo   */}

      <form action="" className="formulario" onSubmit={editarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            name="titulo"
            onChange={cambiado}
            defaultValue={articulo.titulo}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea
            type="text"
            name="contenido"
            onChange={cambiado}
            defaultValue={articulo.contenido}
          />
        </div>
        <div className="form-group">
          <div className="mascara">
            {articulo.imagen !== "default.png" && (
              <img src={Global.url + "imagen/" + articulo.imagen} alt="" />
            )}
            {articulo.imagen === "default.png" && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt=""
              />
            )}
          </div>
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value={"Guardar"} className="btn btn-success" />
      </form>
    </div>
  );
};
