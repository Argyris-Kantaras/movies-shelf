import { useDispatch } from "react-redux";
import styles from "./Logout.module.css";

function Logout(props) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: "user-name", userName: "" });
    dispatch({ type: "user-email", userEmail: "" });
  };

  return (
    <div className={styles.logout}>
      <h1>Hello, {props.name}</h1>
      <button onClick={logoutHandler} className={styles.logoutBtn}>
        Log Out
      </button>
    </div>
  );
}

export default Logout;
