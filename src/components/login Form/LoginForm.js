import { useRef, useState } from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function LoginForm(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const logIn = (collectedData) => {
    const getAccounts = async function (req, res) {
      try {
        const responce = await axios.post(
          "http://localhost:8000/server/login",
          {
            ...collectedData,
          }
        );

        console.log(responce);
        if (responce.data.registered)
          dispatch({ type: "user-name", userName: responce.data.username });
        if (responce.data)
          dispatch({ type: "user-email", userEmail: collectedData.email });
      } catch (err) {
        setError(err.response.data);
      }
    };
    getAccounts();
  };

  const getData = (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    logIn(obj);
  };

  return (
    <form
      style={
        props.showChoice === "logIn" ? { display: "flex" } : { display: "none" }
      }
      className={styles.registerForm}
    >
      <h1>Sign in</h1>
      <div>
        <label className={styles.label}>Email</label>
        <input ref={emailRef} className={styles.input} type="email" />
        <span className={styles.error}>
          {error.includes("Email") ? "* " + error : ""}
        </span>
      </div>
      <div>
        <label className={styles.label}>Password</label>
        <input ref={passwordRef} className={styles.input} type="text" />
        <span className={styles.error}>
          {error.includes("password") ? "* " + error : ""}
        </span>
      </div>
      <button onClick={getData} className={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
