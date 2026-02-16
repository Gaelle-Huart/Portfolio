import styles from './styles.module.css';
import { useEffect, useRef } from "react";


function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const modal = dialogRef.current;
    const focusableEls = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // shift + tab //
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // tab //
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTab);
    return () => modal.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog ref={dialogRef} onCancel={handleCancel} className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        {children}
      </div>
    </dialog>
  );
}

export default Modal;