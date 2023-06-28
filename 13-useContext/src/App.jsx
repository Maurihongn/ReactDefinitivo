import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./router/AppRouter";
import { useEffect, useState } from "react";

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    localStorage.getItem("usuario")
      ? setUsuario(JSON.parse(localStorage.getItem("usuario")))
      : setUsuario({});
  }, []);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <>
      <PruebaContext.Provider value={{ usuario, setUsuario }}>
        <AppRouter />
      </PruebaContext.Provider>
    </>
  );
}

export default App;
