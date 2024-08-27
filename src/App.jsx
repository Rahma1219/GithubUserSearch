
import './App.css'
import { createContext, useState } from 'react'
import Darkmode from './Components/Darkmode/Darkmode';
// import Content from './Components/Content/Content';


export const ThemeContext = createContext(null);

function App(props) {

  const [Theme, setTheme] = useState("light")


  function ChangeTheme(value) {
    setTheme(value)

  }


  // const [DarkMode, setDarkMode] = useState(false)


  return (
    <>
      <div >
        <ThemeContext.Provider value={{ Theme, ChangeTheme }}>
         <Darkmode ></Darkmode >
          {/* <Content></Content> */}
        </ThemeContext.Provider>

      </div>



    </>
  )
}

export default App
