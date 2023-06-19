import styles from "./errorpage.module.scss";

export default function Error() {
  return (
    <>
      <div className={styles.route}>
        <div className={styles.message}>
          <h3 className={styles.title}>THERE`S NOTHING HERE</h3>
          <p className={styles.pain}>
            Searching is pain, you better
            <a className={styles.back} href="http://localhost:5173/">
              {" "}
              GO BACK{" "}
            </a>{" "}
            and try again.
          </p>
          <img
            className={styles.image}
            src="../../portal.png"
            alt="Rick and Morty going outside the portal"
            width="70%"
          ></img>
          <div>
            <p className={styles.error404}>404</p>
          </div>
        </div>
      </div>
    </>
  );
}
