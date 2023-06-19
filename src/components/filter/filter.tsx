import { SyntheticEvent, useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./filter.module.scss";

export function Filter(this: unknown) {
  const {
    characterContext: { handleFilter },
  } = useContext(AppContext);

  const handleSelect = (event: SyntheticEvent) => {
    const element = event.target as HTMLSelectElement;
    if (element.name === "gender") {
      const filter = `/?gender=${element.value}`;
      return handleFilter(filter);
    }
    if (element.name === "status") {
      const filter = `/?status=${element.value}`;
      return handleFilter(filter);
    }
    if (element.name === "specie") {
      const filter = `/?species=${element.value}`;
      return handleFilter(filter);
    }
    if (element.name === "name") {
      const filter = `/?name=${element.value}`;
      return handleFilter(filter);
    }
    if (element.name === "reset") {
      const filter = `${element.value}`;
      return handleFilter(filter);
    }
  };

  return (
    <div className={styles.filter}>
      <select
        className={styles.select__button}
        name="status"
        id="status"
        onChange={handleSelect}
      >
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className={styles.select__button}
        name="gender"
        onChange={handleSelect}
      >
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <select
        className={styles.select__button}
        name="specie"
        onChange={handleSelect}
      >
        <option value="human">Human</option>
        <option value="animal">Animal</option>
        <option value="humanoid">Humanoid</option>
        <option value="Alien">Alien</option>
        <option value="Poopybutthole">Poopybutthole</option>
      </select>
      <input
        className={styles.textbox}
        type="textbox"
        name="name"
        onChange={handleSelect}
        placeholder="What r u looking 4?"
      ></input>
      <button className={styles.reset} name="reset" onClick={handleSelect}>
        Reset
      </button>
    </div>
  );
}
