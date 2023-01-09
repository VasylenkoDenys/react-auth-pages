import React, { Component } from "react";
import styles from "../main.module.scss";
import image from "../../images/logoSquadhelp.webp";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { withRouter } from "react-router";

class Header extends Component {
  state = {
    isAuth: true,
  };

  loginBtnClick = () => {
    const { isAuth } = this.state;
    const { history } = this.props;

    if (isAuth) {
      this.setState({
        isAuth: false,
      });
      history.push("/registration");
    } else {
      this.setState({
        isAuth: true,
      });
      history.push("/");
    }
  };


  render() {
    const { isAuth } = this.state;
    return (
      <header className={styles.headerWrapper}>
        <a href="https://www.squadhelp.com/" target="_blank" rel="noreferrer">
          <img
            className={styles.logoWrapper}
            src={image}
            alt="logo Squadhelp"
          />
        </a>
        <div className={styles.buttonWrapper}>
          {isAuth ? (
            <LoginButton onClick={this.loginBtnClick} />
          ) : (
            <SignupButton onClick={this.loginBtnClick} />
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
