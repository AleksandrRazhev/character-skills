import { useDispatch, useSelector } from "react-redux";
import style from "./App.module.css";

const App = () => {
  const characters = useSelector((state) => state.characters.characters);
  const dicpatch = useDispatch();

  return (
    <div className={style.app}>
      <button className={style.button}>Добавить персонажа</button>
      <button className={style.button}>Удалить персонажа</button>
      <ul className={style.list}>
        {characters.map((item) => (
          <li key={item.id} className={style.itemList}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
