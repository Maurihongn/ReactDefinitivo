import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  Navigate,
} from "react-router-dom";
import {
  ArticulosPage,
  CrearPage,
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
        </Routes>
      </section>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};
