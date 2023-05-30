import styles from "./DarkModeToggleButton.module.css";
import { useThemeContext } from "../context/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkModeToggleButton = () => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={styles.darkModeToggleButton} onClick={handleDarkModeToggle}>
      <FontAwesomeIcon
        icon={isDarkMode ? faSun : faMoon}
        className={styles.darkModeToggleButton__icon}
      />
    </div>
  );
};

export default DarkModeToggleButton;
