import React, { Component } from "react";
import styles from "./Header.module.scss";
import image from "../../../images/logoSquadhelp.webp";

class Header extends Component {
  render() {
    return (
      <header className={styles.headerWrapper}>
        <a href="https://www.squadhelp.com/" target="_blank" rel="noreferrer">
          <img className={styles.logoWrapper} src={image} alt="logo Squadhelp" />
        </a>
        <div className={styles.buttonWrapper}>
        <button className={styles.headerBtn}>Signup</button>
        </div>
      </header>
    );
  }
}

export default Header;
