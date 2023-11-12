
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import axios from "axios";

export  const AuthContext=createContext()


const AuthProvider = ({children}) => {
 const provider = new GoogleAuthProvider();
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
    //   if user exist then issue a token
//      if(currentUser){
//         const loggedUser={email:currentUser.email}
// axios.post("http://localhost:5173/jwt",loggedUser,{withCredentials:true})
// .then(res=>{
//     console.log("token response",res.data)
// })
//      }

    })
    return ()=>{
        return unsubscribe()
    }
},[])
  
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const google=(auth,provider)=>{
    setLoading(true)
   return  signInWithPopup(auth, provider)
}



const logOut = () => {
    setLoading(true);
    return signOut(auth);
}



const authInfo={
    user,
    loading,
    createUser,
    signIn,
    logOut,
    google


}


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;