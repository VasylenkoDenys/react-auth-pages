import React, { Component } from "react";
import styles from "./Header.module.scss";
import image from "../../../images/logoSquadhelp.webp";

class Header extends Component {
  render() {
    return (
      <div className={styles.headerWrapper}>
        <a href="https://www.squadhelp.com/" target="_blank" rel="noreferrer">
          <img src={image} alt="logo Squadhelp" />
        </a>
        <button className={styles.btn}>Signup</button>
      </div>
    );
  }
}

export default Header;
