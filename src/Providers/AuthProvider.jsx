
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export  const AuthContext=createContext()


const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
 
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
        return unsubscribe()
    }
},[])
  
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}




const authInfo={
    user,
    loading,
    createUser,
    signIn


}


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;