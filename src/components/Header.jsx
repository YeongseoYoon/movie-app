import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import Modal from "./Modal";
import Login from "./Login";
import Join from "./Join";
import { ThemeContext } from "../context/ThemeContext";

const useScroll = (callbackFn) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", callbackFn);
    return () => window.removeEventListener("scroll", callbackFn);
  }, [callbackFn]);
};

const useResize = (callbackFn) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", callbackFn);
    return () => window.removeEventListener("resize", callbackFn);
  }, [callbackFn]);
};

const usePreventModalPadding = (isLoginFormOpen, isJoinFormOpen) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-top",
      isLoginFormOpen || isJoinFormOpen ? "0" : "20px"
    );
  }, [isLoginFormOpen, isJoinFormOpen]);
};

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isJoinFormOpen, setJoinFormOpen] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isUserButtonToggled, setIsUserButtonToggled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const isMenuToggledAndSmallScreen = isSmallScreen && isMenuToggled;
  const isUserButtonToggledAndSmallScreen =
    isSmallScreen && isUserButtonToggled;

  useResize(() => {
    setIsSmallScreen(window.innerWidth <= 768);
  });

  useScroll(() => {
    setIsSticky(window.pageYOffset > 20);
  });

  usePreventModalPadding(isLoginFormOpen, isJoinFormOpen);

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  const toggleUserButton = () => {
    setIsUserButtonToggled(!isUserButtonToggled);
  };

  const toggleLoginForm = () => {
    setLoginFormOpen(!isLoginFormOpen);
  };

  const toggleJoinForm = () => {
    setJoinFormOpen(!isJoinFormOpen);
  };

  return (
    <header
      className={`${styles.header} ${isSticky ? styles.sticky : ""} ${
        isDarkMode ? styles.dark : ""
      }`}
    >
      <div className={styles.toggle} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuToggled ? faTimes : faBars} />
      </div>
      <Link to={`/`} className={styles.logo}>
        <h2>YeongFlix</h2>
      </Link>
      <div className={styles.user} onClick={toggleUserButton}>
        <FontAwesomeIcon icon={isUserButtonToggled ? faTimes : faUser} />
      </div>
      {!isSmallScreen && (
        <>
          <ul
            className={`${styles.header__menulist} ${
              isDarkMode ? styles.dark : ""
            }`}
          >
            <li>Comics</li>
            <li>Series</li>
            <li>Stories</li>
            <li>Events</li>
          </ul>
          <ul
            className={`${styles.header__right} ${
              isDarkMode ? styles.dark : ""
            }`}
          >
            <li className={styles.navBtn}>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li className={styles.navBtn} onClick={toggleLoginForm}>
              Login
            </li>
            <li className={styles.navBtn} onClick={toggleJoinForm}>
              Join
            </li>
          </ul>
        </>
      )}
      {isMenuToggledAndSmallScreen && (
        <ul
          className={`${styles.header__menulist} ${
            isDarkMode ? styles.dark : ""
          }`}
        >
          <li>Comics</li>
          <li>Series</li>
          <li>Stories</li>
          <li>Events</li>
        </ul>
      )}
      {isUserButtonToggledAndSmallScreen && (
        <ul
          className={`${styles.header__right} ${isDarkMode ? styles.dark : ""}`}
        >
          <li className={styles.navBtn}>
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className={styles.navBtn} onClick={toggleLoginForm}>
            Login
          </li>
          <li className={styles.navBtn} onClick={toggleJoinForm}>
            Join
          </li>
        </ul>
      )}
      {isLoginFormOpen && (
        <Modal closeModal={toggleLoginForm}>
          <Login />
        </Modal>
      )}
      {isJoinFormOpen && (
        <Modal closeModal={toggleJoinForm}>
          <Join />
        </Modal>
      )}
    </header>
  );
};

export default Header;
