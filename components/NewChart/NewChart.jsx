import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../../store/charactersSlice";
import style from "./NewChart.module.css";

const NewChart = () => {
  const characters = useSelector((state) => state.characters.characters);
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  const skillsObj = (skills) =>
    skills.reduce((acc, item) => {
      return { ...acc, [item]: 0 };
    }, {});

  const [nameState, setNameState] = useState("");
  const [skillsState, setSkillState] = useState(skillsObj(skills));
  const skillsEntries = Object.entries(skillsState);

  const onAddCharacter = () => {
    const caracter = {
      id: characters[characters.length - 1].id + 1,
      name: nameState,
    };
    dispatch(addCharacter(caracter));
  };

  const onSetSkill = (characteristic) => {
    const skill = skillsEntries[0][0];
    const value = skillsEntries[0][1];
    if ((!skill && skill !== 0) || (!value && value !== 0)) {
      return;
    }
    console.log(skill);
    console.log(value);
  };

  return (
    <form className={style.form}>
      <p>{nameState}</p>
      {skillsEntries.map((item) => (
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
            onChange={(e) => onSetSkill({ power: Number(e.target.value) })}
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
