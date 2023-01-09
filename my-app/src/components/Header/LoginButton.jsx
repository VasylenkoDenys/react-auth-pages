import React from "react";
import styles from "../main.module.scss";

function LoginButton(props) {
  const { onClick } = props;
  return (
      <button className={styles.headerBtn} type="button" onClick={onClick}>
        Login
      </button>
  );
}
export default LoginButton;
