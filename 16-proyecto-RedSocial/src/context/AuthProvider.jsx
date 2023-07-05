import { useState, useEffect, createContext } from "react";
import { Global } from "../helpers/Globals";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [counters, setCounters] = useState({});

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    console.log("auth user");
    //Sacar datos usuario identidicado del localStorage
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    //Comprobar si tengo el token y el user
    if (!token || !user) {
      return false;
    }

    //Transformar los datos a un objeto de javascript
    const userObj = JSON.parse(user);
    const userId = userObj.id;

    //Comprobar si el token es valido

    //Peticion al backend para comprobar token y devolverme datos de usuario
    const request = await fetch(Global.url + "user/profile/" + userId, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await request.json();

    const requestCounters = await fetch(
      Global.url + "user/counters/" + userId,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    const dataCounters = await requestCounters.json();

    //Setear el estado de auth
    setAuth(data.user);
    setCounters(dataCounters);
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, counters }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
