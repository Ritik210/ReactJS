
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import { useEffect } from 'react';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  //We are making methods of object properties defined in Theme.js
  //if we make methods with same name these properties will take the values as well from these mtds.
  const lightTheme = () =>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  //actual theme change

  useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode]);
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
