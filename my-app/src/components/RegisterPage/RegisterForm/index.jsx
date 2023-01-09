import React, { Component } from "react";
import styles from "../../main.module.scss";

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    userIs: 'buyer',
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
    const {
      firstName,
      lastName,
      displayName,
      email,
      password,
      passwordConfirm,
      isRemember,
      userIs
    } = this.state;
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.submitHandler}>
          <div>
            <h1 className={styles.formTitle}>CREATE AN ACCOUNT</h1>
            <h2 className={styles.subHeading}>
              We always keep your name and email address private.
            </h2>
          </div>
          <div className={styles.twoSidesInput}>
            <label>
              <input
                placeholder="First name"
                type="firstName"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              <input
                placeholder="Last name"
                type="lastName"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div className={styles.twoSidesInput}>
            <label>
              <input
                placeholder="Display Name"
                type="displayName"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              <input
                placeholder="Email address"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div className={styles.twoSidesInput}>
            <label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              <input
                placeholder="Password Confirmation"
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div className={styles.radioChangeWrapper}>
            <div className={styles.inputRadioStyle}>
              <input id="buyerLabel" type="radio" name="userIs" value='buyer' checked={userIs === 'buyer'} onChange={this.handleChange}/>
              <label htmlFor="buyerLabel">
                Join As a Buyer
                <p>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </p>
              </label>
            </div>
            <div className={styles.inputRadioStyle}>
              <input id="sellerLabel" type="radio" name="userIs" value='seller' checked={userIs === 'seller'} onChange={this.handleChange}/>
              <label htmlFor="sellerLabel">
                Join As a Creative or Marketplace Seller
                <p>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </p>
              </label>
            </div>
          </div>
          <div className={styles.checkboxStyle}>
            <input
              id="allow"
              type="checkbox"
              name="isRemember"
              checked={isRemember}
              onChange={this.handleChange}
            />
            <label htmlFor="allow">
              Allow Squadhelp to send marketing/promotional offers from time to
              time
            </label>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.btnLogin} type="submit">
              Create account
            </button>
            <div className={styles.serviceText}>
            <p>
              By clicking this button, you agree to our{" "}
              <a
                className={styles.serviceLink}
                href="https://www.squadhelp.com/Terms&Conditions"
              >
                Terms of Service.
              </a>
            </p>
            </div>
            <a
              href="https://accounts.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className={styles.btnGoogle}>
                Sign in with Google
              </button>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
