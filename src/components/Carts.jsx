import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../store/cartSlice";

const Carts = () => {
  const carts = useSelector((store) => store.carts.carts);
  const counts = useSelector((store) => store.carts.counts);

  const dispatch = useDispatch();

  const addCarts1 = () => {
    dispatch(addCart({ index: counts, value: "상품 1 - 10000" }));
  };
  const addCarts2 = () => {
    dispatch(addCart({ index: counts, value: "상품 2 - 20000" }));
  };

  return (
    <div>
      <h1>쇼핑 카트</h1>
      <div>
        <ul>
          {carts.map((e) => (
            <li key={e.index}>
              <button
                onClick={() => {
                  dispatch(deleteCart(e.index));
                }}
              >
                제거
              </button>
              {e.value}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={addCarts1}>상품1 추가</button>
      <button onClick={addCarts2}>상품2 추가</button>
    </div>
  );
};

export default Carts;
