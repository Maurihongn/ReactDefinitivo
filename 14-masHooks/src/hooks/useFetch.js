import { useEffect } from "react";
import { useState } from "react";
export const useFetch = (url) => {
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
  });

  const getData = async (url) => {
    setEstado({
      ...estado,
      cargando: true,
    });
    const response = await fetch(url);
    const { data } = await response.json();
    setEstado({ datos: data, cargando: false });
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { datos: estado.datos, cargando: estado.cargando };
};
