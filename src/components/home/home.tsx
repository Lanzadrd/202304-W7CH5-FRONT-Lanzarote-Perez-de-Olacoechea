import { useContext } from "react";
import styles from "./home.module.scss";
import { AppContext } from "../../context/app.context";
import { Button } from "../buttons/buttons";
import { Link } from "react-router-dom";
import { Filter } from "../filter/filter";

export default function Home() {
  const {
    characterContext: { character },
  } = useContext(AppContext);

  return (
    <div className={styles.loadedRoute}>
      <Filter></Filter>
      <ul className={styles.app}>
        {character.map((item) => {
          return (
            <Link key={item.id} to={"/CharacterDetails/" + item.id}>
              <div className={styles.characterCard}>
                <img
                  className={styles.profilePicture}
                  src={item.image}
                  alt="Character portrait"
                  width={80}
                />

                <div className={styles.text}>
                  <p className={styles.id}>#{item.id}</p>
                  <p className={styles.name}>{item.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
      <Button></Button>
    </div>
  );
}
