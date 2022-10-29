import { useDispatch, useSelector } from "react-redux";

import { removeCharacter } from "../../store/charactersSlice";

import style from "./App.module.css";

const App = () => {
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  return (
    <div className={style.app}>
      <form className={style.form}>
        <label className={style.label}>
          Введите имя персонажа
          <input id="name" type="text" />
        </label>
        <button type="button" className={style.button}>
          Добавить персонажа
        </button>
      </form>
      <button
        className={style.button}
        onClick={() => dispatch(removeCharacter())}
      >
        Удалить последнего персонажа
      </button>
      <ul className={style.list}>
        {characters.map((item, index) => (
          <li key={item.id} className={style.itemList}>
            <p>Имя: {item.name}</p>
            <button
              className={style.button}
              onClick={() => dispatch(removeCharacter(index))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
