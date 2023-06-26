import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { InicioPanel } from '../components/panel/InicioPanel';

import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { Acerca } from '../components/panel/Acerca';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/inicio'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/articulos'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contacto'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/panel'
              className={({ isActive }) => (isActive ? 'activado' : '')}
            >
              Panel de Control
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/inicio' />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/persona/:nombre/:apellido?' element={<Persona />} />
        <Route path='/panel/*' element={<PanelControl />}>
          <Route path='inicio' element={<InicioPanel />} />
          <Route path='acerca' element={<Acerca />} />
          <Route path='crear' element={<Crear />} />
          <Route path='gestion' element={<Gestion />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
