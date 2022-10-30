import { useDispatch, useSelector } from "react-redux";

import { addCharacter } from "../../store/charactersSlice";
import { addSkill } from "../../store/newCharacterSlice";

import style from "./NewChart.module.css";

const NewChart = () => {
  const characters = useSelector((state) => state.characters.characters);
  const skills = useSelector((state) => state.skills.skills);
  const newCharacter = useSelector((state) => state.newCharacter);
  const dispatch = useDispatch();

  console.log("new Char", newCharacter);

  const onAddCharacter = () => {
    const caracter = {
      id: characters[characters.length - 1].id + 1,
      name: nameState,
    };
    dispatch(addCharacter(caracter));
  };

  const onSetSkill = (data) => {
    const entries = Object.entries(data);
    const skill = entries[0][0];
    const value = entries[0][1];
    if ((!skill && skill !== 0) || (!value && value !== 0)) {
      return;
    }
    dispatch(addSkill(data));
  };

  return (
    <form className={style.form}>
      <p>{newCharacter.name}</p>
      {Object.entries(newCharacter.skills).map((item) => (
        <p key={item[0]}>
          {item[0]}: {item[1]}
        </p>
      ))}
      <label className={style.label}>
        Имя персонажа
        <input
          id="name"
          type="text"
          onChange={(e) => setNameState(e.target.value)}
        />
      </label>
      {skills.map((item) => (
        <label key={item} className={style.label}>
          {item}
          <input
            id={item}
            type="text"
            onChange={(e) => onSetSkill({ [item]: Number(e.target.value) })}
          />
        </label>
      ))}
      <button type="button" className="button" onClick={() => onAddCharacter()}>
        Добавить персонажа
      </button>
    </form>
  );
};

export default NewChart;
