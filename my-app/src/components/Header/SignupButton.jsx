import React from "react";
import styles from "../main.module.scss";

function SignupButton(props) {
  const { onClick } = props;
  return (
      <button className={styles.headerBtn} type="button" onClick={onClick}>
        Signup
      </button>
  );
}

export default SignupButton;
