import { createContext, useContext, useState } from "react";

export const LoginContext = createContext({
  isLogin : false,
  userName: 'string'
})

export const useLogin = () => {
 const [isLogin, setIsLogin] = useState(false); 
 const [userName, setUserName] = useState('');
 const logIn = () => {
  setIsLogin(true)
 } 
 return { 
  isLogin,
  userName,
  logIn
 }
}

export const useLoginContext = () => useContext(LoginContext)