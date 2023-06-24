import "./App.css";
import { EventosComponente } from "./EventosComponente";
import { MiComponente } from "./MiComponente";
import { SegundoComponente } from "./SegundoCOmponente";
import { TercerComponente } from "./TercerComponente";

function App() {
  let nombre = "Juan";
  let apellido = "Perez";

  let fichaMedica = {
    altura: "1.80",
    grupo: "A+",
    alergias: "Ninguna",
  };

  return (
    <>
      <h1>Vite + React</h1>
      <MiComponente />
      <SegundoComponente />
      <TercerComponente
        nombre={nombre}
        apellido={apellido}
        ficha={fichaMedica}
      />
      <EventosComponente />
    </>
  );
}

export default App;
