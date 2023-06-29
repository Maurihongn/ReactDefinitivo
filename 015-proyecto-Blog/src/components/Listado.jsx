import { Link } from "react-router-dom";
import { Fetch } from "../helpers/Fetch";
import { Global } from "../helpers/Global";

export const Listado = ({ articulos, setArticulos }) => {
  const eliminar = async (id) => {
    let { datos } = await Fetch(Global.url + "article/" + id, "DELETE");

    if (datos.status === "success") {
      let articulosActualizados = articulos.filter(
        (articulo) => articulo._id !== id
      );
      console.log(articulosActualizados);
      setArticulos(articulosActualizados);
    }
  };

  return (
    <>
      {articulos.map((articulo) => (
        <article key={articulo._id} className="articulo-item">
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
          <div className="datos">
            <h3 className="title">
              <Link to={"/article/" + articulo._id}>{articulo.titulo}</Link>
            </h3>
            <p className="description">{articulo.contenido}</p>
            <Link to={"/edit/" + articulo._id} className="edit">
              Editar
            </Link>
            <button
              className="delete"
              onClick={() => {
                eliminar(articulo._id);
              }}
            >
              Borrar
            </button>
          </div>
        </article>
      ))}
    </>
  );
};
