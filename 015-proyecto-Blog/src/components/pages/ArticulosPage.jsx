import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Fetch } from "../../helpers/Fetch";
import { Listado } from "../Listado";

export const ArticulosPage = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.url + "articles";

    const { datos, cargando } = await Fetch(url, "GET");
    setLoading(cargando);
    // let peticion = await fetch(url, {
    //   method: 'GET',
    // });

    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
  };

  return (
    <>
      {loading ? (
        "Cargando..."
      ) : articulos.length >= 1 ? (
        <Listado articulos={articulos} setArticulos={setArticulos} />
      ) : (
        <p>No hay articulos</p>
      )}
    </>
  );
};
