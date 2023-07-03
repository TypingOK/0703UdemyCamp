import store from "./store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import Carts from "./components/Carts";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Login />
        <TodoList />
        <Carts />
      </div>
    </Provider>
  );
}

export default App;
