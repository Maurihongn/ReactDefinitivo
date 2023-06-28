import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Acerca, Articulos, Contacto, Inicio, Login } from "../components";
import { PruebaContext } from "../context/PruebaContext";
import { useContext } from "react";

export const AppRouter = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <BrowserRouter>
      {/* menu de navegacion o layaout  */}
      <header>
        <div className="logo">
          <NavLink to={"/"}>
            <h1>Use context logo</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to={"/acerca"}>Acerca de</NavLink>
            </li>
            <li>
              <NavLink to={"/articulos"}>Articulos</NavLink>
            </li>
            <li>
              <NavLink to={"/contacto"}>Contacto</NavLink>
            </li>

            {"nick" in usuario && usuario.nick !== null ? (
              <>
                <li>
                  <NavLink to={"/"}>{usuario.nick}</NavLink>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setUsuario({});
                    }}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <NavLink to={"/login"}>Login</NavLink>
            )}
          </ul>
        </nav>
      </header>

      {/* configuar Rutas */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
