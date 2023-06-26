import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Empleados = React.memo(({ pagina }) => {
  const [empleados, setEmpleados] = useState([]);

  const conseguirEmpleados = async (pagina) => {
    const url = `https://reqres.in/api/users?page=${pagina}`;
    const peticion = await fetch(url);
    const { data } = await peticion.json();

    setEmpleados(data);
  };

  useEffect(() => {
    conseguirEmpleados(pagina);
  }, [pagina]);

  return (
    <>
      <h1>Empleados</h1>
      <ul>
        {empleados.map((empleado) => {
          return (
            <li key={empleado.id}>
              {empleado.first_name} {empleado.last_name}
            </li>
          );
        })}
      </ul>
    </>
  );
});

//Para solucionar el tema de eslint
Empleados.displayName = "Empleados";
