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
  const [city, setCity] = useState("");
  const [info, setInfo] = useState([]);
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
        city,
        setCity,
        info,
        setInfo,
        signUp,
       
      }}
    >
      {props.children}{" "}
    </userContext.Provider>
  );
};
