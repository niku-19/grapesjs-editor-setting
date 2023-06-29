import React, { useState } from "react";
import { AiOutlineFileAdd, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FaPalette } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsStack } from "react-icons/bs";
import styles from "./LeftSidebar.module.css";

const LeftSidebar = () => {
  const [show, setShow] = useState({
    basic: true,
    traits: false,
    style: false,
  });
  console.log("🚀 ~ file: LeftSidebar.jsx:15 ~ LeftSidebar ~ show:", show);
  return (
    <div className={styles.leftsidebar__container}>
      <div className={styles.brand__name}>
        <h1>InboxImpress</h1>
      </div>
      <div className={styles.addPages__button}>
        <AiOutlineFileAdd className={styles.icon} />
        <button>Add Page</button>
      </div>
      <div className={styles.pages__container}>
        <div className={styles.home__page}>
          <h3>Template 1</h3>
          <div className={styles.icons__container}>
            <AiFillEdit className={styles.edit__icon} />
            <AiFillDelete className={styles.delete__icon} />
          </div>
        </div>
      </div>
      <div className={styles.functional__container}>
        <HiSquares2X2
          className={styles.basic__icons}
          style={{ color: show.basic ? "#1e8fe1" : "#9ca8bb" }}
          onClick={() =>
            setShow({
              basic: true,
              traits: false,
              style: false,
            })
          }
        />
        <BsStack
          className={styles.traits__icons}
          style={{ color: show.traits ? "#1e8fe1" : "#9ca8bb" }}
          onClick={() =>
            setShow({
              basic: false,
              traits: true,
              style: false,
            })
          }
        />
        <FaPalette
          className={styles.style__icons}
          style={{ color: show.style ? "#1e8fe1" : "#9ca8bb" }}
          onClick={() =>
            setShow({
              basic: false,
              traits: false,
              style: true,
            })
          }
        />
      </div>
      <div className="drag__features__container">
        <div
          style={{
            display: show.basic ? "block" : "none",
          }}
          className={styles.basic__features}
        >
          <div id="blocks"></div>
        </div>

        <div
          style={{
            display: show.traits ? "block" : "none",
          }}
          className={styles.traits__features}
        >
          <div id="layer-container"></div>
        </div>

        <div
          style={{
            display: show.style ? "block" : "none",
          }}
          className={styles.style__features}
        >
          <div id="style-view"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
