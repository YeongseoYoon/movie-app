import styles from "./DarkModeToggleButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkModeToggleButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

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
