import { useContext } from "react";
import { Character } from "../../models/character";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import styles from "./characterdetails.module.scss";

export default function CharacterDetails() {
  const { id } = useParams();
  const {
    characterContext: { character },
  } = useContext(AppContext);

  const item: Character = character.find(
    (char) => char.id === Number(id)
  ) as Character;
  {
    return (
      <div className={styles.route}>
        <ul className={styles.character}>
          <img
            className={styles.image}
            src={item.image}
            alt="character-portrait"
          />
          <div className={styles.character__data}>
            <div className={styles.character__data__primary}>
              <li>#{item.id}</li>
              <li>{item.name}</li>
            </div>
            <div className={styles.character__data__secondary}>
              <li>Gender: {item.gender}</li>
              <li>Species: {item.species}</li>
              <li>Status: {item.status}</li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
