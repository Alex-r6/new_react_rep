import { createContext } from "react";

export const ThemeContext = createContext({
    theme : {
        body : 'string',
        text : 'string'
    },
    setTheme : () => {}
})