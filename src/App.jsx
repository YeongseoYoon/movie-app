import Router from "./Router";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
export default App;
