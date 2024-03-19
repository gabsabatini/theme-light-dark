import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const STORAGE = 'themeContext';

type themeContext = {
    theme: string;
    setTheme: (newTheme: string) => void;
}
export const ThemeContext = createContext<themeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE) || 'light' //Se tiver gravado no localstorage, ele pega o dado, senão deixa light
    );

    //Quando houver alguma modificação, ele usa o effect para setar no localstorage
    useEffect(() => {
        localStorage.setItem(STORAGE, theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    );
}

//hook
export const useTheme = () => useContext(ThemeContext);