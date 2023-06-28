import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/articles"}>Articulos</NavLink>
          </li>
          <li>
            <NavLink to={"/create"}>Crear Articulos</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
