import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Editor from "../../Components/Editor/Editor";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.grid__container}>
      <LeftSidebar />
      <Editor />
    </div>
  );
};

export default HomePage;
