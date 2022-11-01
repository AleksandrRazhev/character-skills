import { useDispatch, useSelector } from "react-redux";

import { removeCharacter } from "../../store/charactersSlice";
import { addSkillToArr } from "../../store/skillsSlice";
import Character from "../Character/Character";
import NewChar from "../NewChart/NewChar";

import style from "./App.module.css";

const App = () => {
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  return (
    <div className={style.app}>
      <NewChar />
      <button
        className="button"
        onClick={() => dispatch(addSkillToArr(prompt()))}
      >
        Добавить новую характеристику персонажа
      </button>
      <button className="button" onClick={() => dispatch(removeCharacter())}>
        Удалить последнего персонажа
      </button>
      <ul>
        {characters.map((item, index) => (
          <Character
            key={item.id}
            name={item.name}
            skills={item.skills}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
