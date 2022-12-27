import React, { Component } from "react";
import styles from "./LoginPage.module.scss";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.submitHandler}>
          <label>
            <input className={styles.input} type="email" name="email" />
          </label>
          <input className={styles.input} type="password" name="password" />

          <button className={styles.btn} type="submit">
            LOGIN
          </button>
          <button className={styles.btn}>Sign in with Google</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
