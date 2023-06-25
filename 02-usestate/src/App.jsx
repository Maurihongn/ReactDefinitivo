import './App.css';
import { EjercicioComponent } from './components/EjercicioComponent/EjercicioComponent';
import { MiPrimerEstado } from './components/MiPrimerEstado/MiPrimerEstado';

function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();
  return (
    <>
      <h1>El estado en React Hook usestate</h1>
      <MiPrimerEstado />

      <EjercicioComponent year={yearActual} />
    </>
  );
}

export default App;
