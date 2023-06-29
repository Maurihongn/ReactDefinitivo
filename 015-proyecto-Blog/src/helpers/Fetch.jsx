export const Fetch = async (
  url,
  metodo,
  datosGuardar = "",
  archivo = false
) => {
  let cargando = true;

  let opciones = {
    method: "GET",
  };

  if (metodo == "GET" || metodo == "DELETE") {
    opciones = {
      method: metodo,
    };
  }

  if (metodo == "POST" || metodo == "PUT") {
    if (archivo) {
      opciones = {
        method: metodo,
        body: datosGuardar,
      };
    } else {
      opciones = {
        method: metodo,
        body: JSON.stringify(datosGuardar),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
  }

  const response = await fetch(url, opciones);
  const datos = await response.json();
  cargando = false;

  return { datos, cargando };
};
