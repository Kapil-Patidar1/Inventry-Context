import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{

    const[dark, setDark] = useState(false);

    const changeTheme= () => {
      setDark (dark ? false : true)
    }
    
    return(
        <ThemeContext.Provider value={{dark:dark,changeTheme:changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContext;