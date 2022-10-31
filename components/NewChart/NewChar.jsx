import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCharacter } from "../../store/charactersSlice";
import {
  addSkill,
  addName,
  resetnewCharacter,
} from "../../store/newCharacterSlice";

import style from "./NewChart.module.css";

const NewChart = () => {
  const characters = useSelector((state) => state.characters.characters);
  const skills = useSelector((state) => state.skills.skills);
  const newCharacter = useSelector((state) => state.newCharacter);
  const dispatch = useDispatch();

  const onAddCharacter = (obj) => {
    const char = { name: obj.name, skills: {} };
    if (!obj.name) return;
    const ID = characters[characters.length - 1].id + 1;
    char.id = ID;

    for (let key in obj.skills) {
      if (obj.skills[key]) {
        char.skills[key] = obj.skills[key];
      }
    }
    dispatch(addCharacter(char));
    dispatch(resetnewCharacter());
  };

  console.log(newCharacter);

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
          onChange={(e) => dispatch(addName(e.target.value))}
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
      <button
        type="button"
        className="button"
        onClick={() => onAddCharacter(newCharacter)}
      >
        Добавить персонажа
      </button>
    </form>
  );
};

export default NewChart;
