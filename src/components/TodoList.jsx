import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../store/todoSlice";
import { useState } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState();

  const todo = useSelector((store) => store.todo.todo);

  const onClick = (e) => {
    dispatch(deleteTodo(e));
  };

  const addHandler = () => {
    const temp = state;
    dispatch(addTodo(temp));
    setState("");
  };
  return (
    <div>
      <input
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={addHandler}>추가하기</button>
      <ul>
        {todo.map((e, i) => (
          <li key={i}>
            <button
              onClick={() => {
                onClick(e);
              }}
            >
              삭제
            </button>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
