import { SyntheticEvent, useContext } from "react";
import "./login.scss";
import { AppContext } from "../../context/app.context";

export default async function LoginForm() {
  const {
    characterContext: { handleLogin },
  } = useContext(AppContext);

  const login = async (event: SyntheticEvent) => {
    handleLogin(event);
  };

  return (
    <div className="loaded-route">
      <form className="form">
        <input type="text" placeholder="Username / Email" name="user"></input>
        <input type="password" placeholder="Password" name="password"></input>
        <button type="submit" onClick={login}>
          Log in
        </button>
      </form>
    </div>
  );
}
