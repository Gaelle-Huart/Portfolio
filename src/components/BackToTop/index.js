import { useEffect, useState } from "react";
import styles from './styles.module.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`${styles.backToTop} ${visible ? styles.show : ""}`}
    >
      ^
      ^
      ^
    </a>
  );
}