// Check this file for errors and incorrect decisions
import { useDispatch } from "react-redux";
import { removeCharacter } from "../../store/charactersSlice";

import style from "./Character.module.css";

const Character = (props) => {
  const dicpatch = useDispatch();

  const { name, index, skills } = props;

  const renderSkills = (skills) => {
    const entries = Object.entries(skills);
    if (!entries[0]) return null;
    return (
      <div>
        <p className={style.title}>skills</p>
        <ul>
          {entries.map((item) => (
            <li key={item[0]} className={style.skillItmList}>
              {item[0]}: {item[1]}
            </li>
          ))}
        </ul>
      </div>
    );
    console.log(entries);
  };

  return (
    <li className={style.itemList}>
      <p>Имя: {name}</p>
      {skills ? renderSkills(skills) : null}
      <button
        className="button"
        onClick={() => dicpatch(removeCharacter(index))}
      >
        Удалить
      </button>
    </li>
  );
};

export default Character;
