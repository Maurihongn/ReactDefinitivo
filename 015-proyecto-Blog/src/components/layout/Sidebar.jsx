import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [buscar, setBuscar] = useState("");
  const navegar = useNavigate();

  const hacerBusqueda = (e) => {
    e.preventDefault();
    let miBusqueda = e.target.search_field.value;
    navegar("/buscar/" + miBusqueda, { replace: true });
  };
  return (
    <>
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form action="" onSubmit={hacerBusqueda}>
            <input type="text" name="search_field" />
            <button type="submit" id="search">
              Buscar
            </button>
          </form>
        </div>
        {/* <div className="add">
          <h3 className="title">Añadir articulo</h3>
          <form action="">
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripcion"></textarea>
            <input type="submit" value="Añadir" id="save" />
          </form>
        </div> */}
      </aside>
    </>
  );
};
