"use client"
import { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

  return {
    isDarkMode, 
    setIsDarkMode,
  }
}

export default useDarkMode