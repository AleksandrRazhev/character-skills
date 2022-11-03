// Check this file for errors and incorrect decisions
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCharacter } from "../../store/charactersSlice";
import {
  addSkill,
  addName,
  resetnewCharacter,
  addSkills,
} from "../../store/newCharacterSlice";

import style from "./NewChar.module.css";

const NewChar = () => {
  const characters = useSelector((state) => state.characters.characters);
  const skills = useSelector((state) => state.skills.skills);
  const newCharacter = useSelector((state) => state.newCharacter.newCharacter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSkills(addSkills(skills)));
  }, [skills, characters, dispatch]);

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

  const onSetSkill = (data) => {
    const entries = Object.entries(data);
    const skill = entries[0][0];
    const value = entries[0][1];
    if ((!skill && skill !== 0) || (!value && value !== 0)) {
      return;
    }
    dispatch(addSkill(data));
  };

  const newCharSkills = Object.entries(newCharacter.skills);

  return (
    <form className={style.form}>
      <label className={style.label}>
        Имя персонажа
        <input
          id="name"
          type="text"
          value={newCharacter.name}
          onChange={(e) => dispatch(addName(e.target.value))}
        />
      </label>
      {newCharSkills[0]
        ? newCharSkills.map((item) => (
            <label key={item[0]} className={style.label}>
              {item[0]}
              <input
                id={item[0]}
                type="text"
                onChange={(e) =>
                  onSetSkill({ [item[0]]: Number(e.target.value) })
                }
              />
            </label>
          ))
        : null}
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

export default NewChar;
