import styles from "./SignInOrUp.module.css";

function SignInOrUp(props) {
  return (
    <div className={styles.choiceContainer}>
      <div
        onClick={(e) => props.setShowChoice(e.target.id)}
        id="logIn"
        className={styles.choice}
      >
        Sign In
      </div>
      <div style={{ display: "inline-block" }}>OR</div>
      <div
        onClick={(e) => props.setShowChoice(e.target.id)}
        id="register"
        className={styles.choice}
      >
        Sign Up
      </div>
    </div>
  );
}

export default SignInOrUp;
