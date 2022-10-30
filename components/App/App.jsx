import { useDispatch, useSelector } from "react-redux";

import { addCharacter, removeCharacter } from "../../store/charactersSlice";
import NewChart from "../NewChart/NewChart";

import style from "./App.module.css";

const App = () => {
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  return (
    <div className={style.app}>
      <NewChart />
      <button className="button" onClick={() => dispatch(removeCharacter())}>
        Удалить последнего персонажа
      </button>
      <ul className={style.list}>
        {characters.map((item, index) => (
          <li key={item.id} className={style.itemList}>
            <p>Имя: {item.name}</p>
            <button
              className="button"
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
