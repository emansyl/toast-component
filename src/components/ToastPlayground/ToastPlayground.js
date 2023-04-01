import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toastStack, setToastStack] = React.useState([]);

  function addItem(newItem) {
    setToastStack([...toastStack, newItem]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf setToastStack={setToastStack} toastStack={toastStack} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addItem({ id: crypto.randomUUID() ,message: message, variant: variant });
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                onChange={(event) => {
                  console.log(message);
                  setMessage(event.target.value);
                }}
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <div key={option}>
                  <label htmlFor={option}>
                    <input
                      type="radio"
                      name="toast-type"
                      id={`variant-${option}`}
                      value={option}
                      checked={option === variant}
                      onChange={(event) => {
                        console.log(toastStack);
                        setVariant(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
