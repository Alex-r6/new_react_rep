import { useEffect, useState } from "react"

const user = {
    name : 'alex',
    email : 'sdsada',
    _id : 121
}

export const useUser = () => { // Robert
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const login = (user) => {
    setUser(user)
    setIsLogin(true)
  }
  const logout = () => {
    setUser({})
    setIsLogin(false)
  }


  return {
    user,
    isLogin,
    login,
    logout,

  }
}