import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../verification_source/init.firebase";
import { createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthContext = createContext({ currentUser: null,register:()=>Promise,SigninwithGoogle:()=>Promise });

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setcurrentUser] = useState(null);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth,email,password)
  }
  function SigninwithGoogle() {
    const provider = new GoogleAuthProvider
    return signInWithPopup(auth,provider)
    
  }

  const value = {
    currentUser,
    register,
    SigninwithGoogle
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
