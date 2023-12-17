import { useRef, useState } from "react";
import axios from "axios";
import styles from "./RegisterForm.module.css";

function RegisterForm(props) {
  const [message, setMessage] = useState("");
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const saveAccounts = async (collectedData) => {
    try {
      const res = await axios.post("http://localhost:8000/server/register", {
        ...collectedData,
      });
      setMessage(res.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const newAccount = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (newAccount.name.length < 2) {
      setMessage("You must have minimum 2 characters for name");
    } else if (
      newAccount.age.length < 1 ||
      newAccount.age.length > 100 ||
      newAccount.age.length === 0
    ) {
      setMessage("Sorry that is not a valid age");
    } else if (
      newAccount.email.length === 0 ||
      !newAccount.email.includes("@") ||
      !newAccount.email.includes(".")
    ) {
      setMessage("Sorry that is not a valid email address");
    } else if (newAccount.password.length < 6) {
      setMessage("Make sure the password is at least 6 characters");
    } else if (newAccount.password !== rePasswordRef.current.value) {
      setMessage("Passwords don't match, please retype correctly");
    } else {
      setMessage("");
    }
    if (message === "") saveAccounts(newAccount);

    console.log(newAccount.password !== rePasswordRef.current.value);
  };
  return (
    <form
      style={
        props.showChoice === "register"
          ? { display: "flex" }
          : { display: "none" }
      }
      className={styles.registerForm}
    >
      <h1>Sign up</h1>
      <div>
        <label className={styles.label}>Name</label>
        <input
          min={3}
          max={12}
          ref={nameRef}
          className={styles.input}
          type="text"
        />
      </div>
      <div>
        <label className={styles.label}>Age</label>
        <input ref={ageRef} className={styles.input} type="text" />
      </div>
      <div>
        <label className={styles.label}>Email</label>
        <input ref={emailRef} className={styles.input} type="email" />
      </div>
      <div>
        <label className={styles.label}>Password</label>
        <input ref={passwordRef} className={styles.input} type="password" />
      </div>
      <div>
        <label className={styles.label}>Repeat Password</label>
        <input ref={rePasswordRef} className={styles.input} type="password" />
      </div>
      <button onClick={registerHandler} className={styles.button}>
        Submit
      </button>
      <div className={styles.errorMessage}>
        {" "}
        {message !== "" && "*" + message}
      </div>
    </form>
  );
}
export default RegisterForm;
