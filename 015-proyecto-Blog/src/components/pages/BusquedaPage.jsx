import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Fetch } from "../../helpers/Fetch";
import { useParams } from "react-router-dom";
import { Listado } from "../Listado";

export const BusquedaPage = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async () => {
    const url = Global.url + "buscar/" + params.busqueda;

    const { datos, cargando } = await Fetch(url, "GET");
    setLoading(cargando);
    // let peticion = await fetch(url, {
    //   method: 'GET',
    // });

    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    } else {
      setArticulos([]);
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
