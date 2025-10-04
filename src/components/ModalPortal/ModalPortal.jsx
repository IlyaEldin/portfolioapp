import { createPortal } from "react-dom";
import classes from "./ModalPortal.module.css";

export default function ModalPortal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className={classes.modalOverlay}>{children}</div>,
    document.body
  );
}
