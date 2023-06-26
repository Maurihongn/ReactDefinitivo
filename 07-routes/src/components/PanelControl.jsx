import { NavLink, Outlet } from 'react-router-dom';

export const PanelControl = () => {
  return (
    <>
      <h1>Panel de Control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/panel/inicio'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/panel/acerca'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/panel/crear'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Crar
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/panel/gestion'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Gestion
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};
