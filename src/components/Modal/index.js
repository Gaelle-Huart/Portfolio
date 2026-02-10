import styles from './styles.module.css';


export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <dialog className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        {children}
      </div>
    </dialog>
  );
}