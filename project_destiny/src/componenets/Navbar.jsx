import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/nav.module.css";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        setVisible(false); 
      } else {
        setVisible(true); 
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <>
    <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
      {/* Logo */}
      <div className={styles.Logoimg}>
        <img src={Logo} className={styles.Logo} alt="Logo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${menuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.open : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <nav className={`${styles.Navbar} ${menuOpen ? styles.active : ""}`}>
        <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? styles.activeNav : styles.navLink)}>
          About us
        </NavLink>
        <NavLink to="/Initiatives" onClick={toggleMenu} className={({ isActive }) => (isActive ? styles.activeNav : styles.navLink)}>
          Initiatives
        </NavLink>
        <NavLink to="/Donations" onClick={toggleMenu} className={({ isActive }) => (isActive ? styles.activeNav : styles.navLink)}>
          Donation
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => (isActive ? styles.activeNav : styles.navLink)}>
          Contact us
        </NavLink>
      </nav>
    </header>
    
    <div className={`${styles.overlay} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu}></div>


    </>
  );
}

export default Navbar;
