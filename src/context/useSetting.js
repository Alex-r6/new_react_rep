import { createContext, useContext, useState } from "react";

export const SettingContext = createContext() // 1

export const useSetting = () => { // 3 
  const [headerBG, setHeaderBG] = useState('red')
  const [homeBG, setHomeBG] = useState('green')
  const [postBG, setPostBG] = useState('green')
  const [isHome, setIsHome] = useState(true)
  const [isSetting, setIsSetting] = useState(true)
  const [isMessage, setIsMessage] = useState(false)
 
  const changeHeader = color => setHeaderBG(color)
  const changeHome = color => setHomeBG(color)

  return {
    headerBG,
    homeBG,
    postBG,
    isHome,
    isSetting,
    isMessage,
    changeHeader,
    changeHome,
    setIsHome,
    setIsSetting,
    setIsMessage,
    setPostBG
  }
}

export const useSettingContext = () => useContext(SettingContext) // 6