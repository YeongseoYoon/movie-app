import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  function closeModal() {
    props.closeModal();
  }
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <button id={styles.modalCloseBtn} onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
