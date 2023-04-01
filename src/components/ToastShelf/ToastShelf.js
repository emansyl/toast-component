import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastStack, setToastStack }) {
  return (
    <ol className={styles.wrapper}>
      {toastStack.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast toastStack={toastStack} setToastStack={setToastStack} id={toast.id} variant={toast.variant}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
