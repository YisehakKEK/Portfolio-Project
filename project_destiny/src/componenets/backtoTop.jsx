import { useState, useEffect } from "react";
import styles from "../Styles/BackToTopButton.module.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTopButton} ${isVisible ? styles.show : ""}`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTopButton;
