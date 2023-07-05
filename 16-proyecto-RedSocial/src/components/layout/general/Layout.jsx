import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <>
      {/* LAYOUT */}
      <Header />

      {/* Contenido Principal */}
      <section className="layout__content">
        <Outlet />
      </section>

      {/* Barra Lateral */}
      <Sidebar />
    </>
  );
};
