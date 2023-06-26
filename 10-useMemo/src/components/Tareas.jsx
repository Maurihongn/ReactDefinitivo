import { useState } from "react";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  const guardarTarea = (e) => {
    e.preventDefault();

    setTareas((tarea) => [...tarea, e.target.descripcion.value]);
  };
  const borrarTarea = (indice) => {
    //filtrar
    let nuevas_tareas = tareas.filter((tarea, i) => i !== indice);

    //setstate
    setTareas(nuevas_tareas);
  };

  return (
    <>
      <h1>Mis tareas</h1>
      <form action="" onSubmit={guardarTarea}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          name="descripcion"
        />
        <input type="submit" value="Agregar" />
      </form>

      <h3>Lista de tareas:</h3>
      <div>
        {tareas.map((tarea, indice) => (
          <li key={indice}>
            {tarea}
            &nbsp;
            <button onClick={() => borrarTarea(indice)}>x</button>
          </li>
        ))}
      </div>
    </>
  );
};
