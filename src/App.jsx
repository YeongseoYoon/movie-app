import Router from "./Router";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Router />
    </ThemeContext.Provider>
  );
}
export default App;
