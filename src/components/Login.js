import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.login.isAuth);

  const onClick = () => {
    dispatch(login());
  };

  return (
    <div>
      {isAuth ? (
        <div>
          <div>로그인 상태입니다.</div>
          <button onClick={onClick}>로그아웃</button>
        </div>
      ) : (
        <>
          <div>로그인 되지 않았습니다.</div>
          <button onClick={onClick}>로그인</button>
        </>
      )}
    </div>
  );
};

export default Login;
