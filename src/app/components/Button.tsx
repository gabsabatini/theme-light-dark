import { useTheme } from "../contexts/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const Button = () => {
    const themeCtx = useTheme();
    const handleTheme = () => {
        if (themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
        }
    }

    return (
        <button className={`border px-4 py-3 mt-5 rounded-md ${themeCtx?.theme === 'dark' ? 'bg-gray-100 text-stone-700' : 'bg-gray-700 text-white' } `}
                onClick={handleTheme}>
            {themeCtx?.theme === 'dark' && <MdOutlineLightMode size={24} />}
            {themeCtx?.theme === 'light' && <MdDarkMode size={24} />}
        </button>   
    );
}
