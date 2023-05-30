import Header from "./Header";
import styles from "./Layout.module.css";
import DarkModeToggleButton from "./DarkModeToggleButton";
import { useThemeContext } from "../context/ThemeContext";

const Layout = (props) => {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`${styles.layout} ${isDarkMode ? styles.dark : ""}`}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <DarkModeToggleButton />
    </div>
  );
};

export default Layout;
