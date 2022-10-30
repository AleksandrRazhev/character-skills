import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../../store/charactersSlice";
import style from "./NewChart.module.css";

const NewChart = () => {
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  const [nameState, setNameState] = useState("");

  const onAddCharacter = () => {
    const caracter = {
      id: characters[characters.length - 1].id + 1,
      name: nameState,
    };
    dispatch(addCharacter(caracter));
  };

  return (
    <form className={style.form}>
      <p>{nameState}</p>
      <label className={style.label}>
        Введите имя персонажа
        <input
          id="name"
          type="text"
          onChange={(e) => setNameState(e.target.value)}
        />
      </label>
      <button type="button" className="button" onClick={() => onAddCharacter()}>
        Добавить персонажа
      </button>
    </form>
  );
};

export default NewChart;
