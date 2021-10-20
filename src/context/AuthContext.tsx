import React, {createContext, ReactNode, useContext, useState} from 'react'
import * as AuthSessions from 'expo-auth-session'

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
}

type AuthContextData = {
  user: User | null
  isSigningIng: boolean
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthResponse = {
  token: string;
  user: User
}

type AuthorizationResponse = {
  params: {
    code?: string;
  }
}

export const AuthContext = createContext({} as AuthContextData)
 
export const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
  const [isSigningIng, setIsSigningIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const client_id = '68ce74681a19483e8e91'
  const scope = 'read:user'

 

  const signIn = async () => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=${scope}`

    const {params} = await AuthSessions.startAsync({authUrl}) as AuthorizationResponse

    console.log(params)
    return
  }

  const signOut = () => {

    return Promise
  }


  return(
    <AuthContext.Provider value={{user: null, isSigningIng, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}