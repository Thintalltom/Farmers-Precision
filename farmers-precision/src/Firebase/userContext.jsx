import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./Firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export const userContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [crop, setCrop] = useState("");
  const [country, setCountry] = useState("");
  const [waterlevel, setWaterlevel] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [ph, setPh] = useState("");
  const [info, setInfo] = useState(null);
  const [logpassword, setLogPassword] = useState("");
  const [logemail, setLogEmail] = useState("");
  const signUp = (email, password) => {
    //return the function
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    //return the function
    return signInWithEmailAndPassword(auth, email, password);
  };

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userContext.Provider
      value={{
        login,
        crop,
        setCrop,
        country, setCountry,waterlevel, setWaterlevel,humidity, setHumidity,temperature, setTemperature,ph, setPh,
        info,
        setInfo,
        signUp,
        logOut
       
      }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
};
