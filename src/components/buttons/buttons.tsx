import { useContext } from "react";
import styles from "./button.module.scss";
import { AppContext } from "../../context/app.context";

export function Button() {
  const {
    characterContext: { handleLoad, next, prev },
  } = useContext(AppContext);

  const handleNext = () => {
    handleLoad(next);
  };

  const handlePrev = () => {
    handleLoad(prev);
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.text_right_button} onClick={handlePrev}>
        Anterior
      </button>
      <button className={styles.text_left_button} onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
}
