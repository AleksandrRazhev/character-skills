import { useDispatch } from "react-redux";
import { removeCharacter } from "../../store/charactersSlice";

import style from "./Character.module.css";

const Character = (props) => {
  const dicpatch = useDispatch();

  const { name, index } = props;
  return (
    <li className={style.itemList}>
      <p>Имя: {name}</p>
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
