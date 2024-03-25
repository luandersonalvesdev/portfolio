import { useEffect, useState } from "react";
import { MoonSvg } from "../svgs/MoonSvg";
import { SunSvg } from "../svgs/SunSvg";

export default function SwitchTheme({className}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const themeFromLs = localStorage.getItem('luandersonalvesdev-theme');
    if(themeFromLs) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      return;
    }
    document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const handleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
      localStorage.removeItem('luandersonalvesdev-theme');
    } else {
      setDarkMode(true);
      localStorage.setItem('luandersonalvesdev-theme', 'dark');
    }
  }

  return (
    <div
      onClick={handleTheme} 
      className={`absolute bg-c-secondary-light dark:bg-c-secondary-dark rounded-lg py-2 px-2 -top-1 right-0 cursor-pointer ${className}`}
    >
      <div>
        {
          darkMode ? <MoonSvg /> : <SunSvg />
        }
      </div>
    </div>
  )
}