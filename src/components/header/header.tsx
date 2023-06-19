/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <a onClick={() => navigate("/")}>
          <img className={styles.image} src="../../package.png" alt="logo" />
        </a>
      </header>
      {children}
    </>
  );
}
