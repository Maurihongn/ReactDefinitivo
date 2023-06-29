import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch } from "../../helpers/Fetch";
import { Global } from "../../helpers/Global";

export const ArticuloPage = () => {
  const [articulo, setArticulo] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);
  useEffect(() => {
    console.log(articulo);
  }, [articulo]);

  const conseguirArticulo = async () => {
    const url = Global.url + "article/" + params.id;

    const { datos, cargando } = await Fetch(url, "GET");
    setLoading(cargando);
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
    <>
      {loading ? (
        "cargando"
      ) : Object.keys(articulo).length !== 0 ? (
        <div className="jumbo">
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
          <h1>{articulo.titulo}</h1>
          <span>{articulo.fecha}</span>
          <p>{articulo.contenido}</p>
        </div>
      ) : (
        <h1>No se encontro el articulo</h1>
      )}
    </>
  );
};
