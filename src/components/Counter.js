import { useDispatch, useSelector } from "react-redux";
import { addCounter, mius } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((store) => store.counter.value);

const dispatch = useDispatch();
  const addHandler = () => {
      dispatch(addCounter());
  };
  const minusHandler = () => {
    dispatch(mius());
  };

  return (
    <div>
      <h1>카운터</h1>
      <div>count: {count}</div>
      <div>
        <button onClick={addHandler}>증가</button>
        <button onClick={minusHandler}>감소</button>
      </div>
    </div>
  );
};

export default Counter;
