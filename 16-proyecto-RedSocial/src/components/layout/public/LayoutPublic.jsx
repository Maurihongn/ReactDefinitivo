import { Outlet } from "react-router-dom";
import { HeaderPublic } from "./HeaderPublic";

export const LayoutPublic = () => {
  return (
    <>
      {/* LAYOUT */}
      <HeaderPublic />

      {/* Contenido Principal */}
      <section className="layout__content">
        <Outlet />
      </section>
    </>
  );
};
