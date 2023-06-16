import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar"
export default function App() {

  // Creating a state which can handle dark and light mode
  // Set the initial value of the state to true
  const [colorScheme, setColorScheme] = React.useState(false)

  function handleMode() {
    setColorScheme(!colorScheme)
  }
  return (
    <>
      <div className="container">
        <Navbar darkMode={colorScheme} toggleDarkMode={handleMode} />
        <Main darkMode={colorScheme} />
      </div>
    </>
  )
}