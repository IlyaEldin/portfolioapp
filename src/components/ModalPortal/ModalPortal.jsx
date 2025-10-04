import { createPortal } from "react-dom";
import classes from "./ModalPortal.module.css";
import { useEffect } from "react";

export default function ModalPortal({ children, isOpen, setModalOpen }) {
  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, [setModalOpen, isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={classes.modalOverlay}>{children}</div>,
    document.body
  );
}
