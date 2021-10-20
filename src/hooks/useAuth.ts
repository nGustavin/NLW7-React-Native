import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth(){
  const {isSigningIng, signIn, signOut, user} = useContext(AuthContext)
  return {isSigningIng, signIn, signOut, user}
}