"use client"
import { MdSunny, MdDarkMode } from "react-icons/md";
import useDarkMode from "./DaisyUi/useDarkMode";

export default function Home() {
  const {isDarkMode, setIsDarkMode} = useDarkMode();

  return (
    <div>
      Hello world
      <button className="btn btn-neutral btn-square ml-2" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode 
          ? <MdSunny size={20}/>
          : <MdDarkMode size={20}/>
        }
      </button>
    </div>
  );
}
