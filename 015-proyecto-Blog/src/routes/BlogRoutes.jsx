import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  Navigate,
} from "react-router-dom";
import {
  ArticuloPage,
  ArticulosPage,
  BusquedaPage,
  CrearPage,
  EditarPage,
  Footer,
  Header,
  InicioPage,
  Nav,
  Sidebar,
} from "../components";

export const BlogRoutes = () => {
  return (
    <BrowserRouter>
      {/* Layout */}
      <Header />
      <Nav />

      {/* Contenido central y rutas */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/articles" element={<ArticulosPage />} />
          <Route path="/create" element={<CrearPage />} />
          <Route path="/buscar/:busqueda" element={<BusquedaPage />} />
          <Route path="/article/:id" element={<ArticuloPage />} />
          <Route path="/edit/:id" element={<EditarPage />} />
          <Route
            path="*"
            element={
              <div className="jumbo">
                <h1>Error 404</h1>
              </div>
            }
          />
        </Routes>
      </section>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};
