import React, { Component } from "react";
import styles from "../../main.module.scss";


class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    isRemember: false,
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const {
      target: { value, name, type, checked },
    } = e;

    const newValue = type === "checkbox" ? checked : value;

    const newState = {
      [name]: newValue,
    };
    this.setState(newState);
  };

  render() {
    const { email, password, isRemember } = this.state;
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.submitHandler}>
          <h1 className={styles.formTitle}>LOGIN TO YOUR ACCOUNT</h1>
          <label>
            <input
              className={styles.inputStyle}
              placeholder="Email address"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className={styles.inputStyle}
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <div className={styles.middleFormWrapper}>
            <label>
              <input
                type="checkbox"
                name="isRemember"
                checked={isRemember}
                onChange={this.handleChange}
              />
              Remember Me
            </label>
            <a
              className={styles.linkStyle}
              href="https://www.squadhelp.com/forgot_password.php"
              target="_blank"
              rel="noreferrer"
            >
              Forgot Password
            </a>
          </div>
          <button className={styles.btnLogin} type="submit">
            LOGIN
          </button>
          <a
            href="https://accounts.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className={styles.btnGoogle}>
              Sign in with Google
            </button>
          </a>
        </form>
      </div>
    );
  }
}

export default LoginForm;
