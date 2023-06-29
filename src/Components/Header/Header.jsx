import React from "react";
import { BiDesktop } from "react-icons/bi";
import { BsTabletFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { HiSquares2X2 } from "react-icons/hi2";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.device__container}>
        <BiDesktop className={styles.icon} />
        <BsTabletFill className={styles.icon} />
        <BsPhone className={styles.icon} />
      </div>
      <div className="option__container">
        <HiSquares2X2 id="panel__basic-actions" className={styles.icon} />
      </div>
    </header>
  );
};

export default Header;
