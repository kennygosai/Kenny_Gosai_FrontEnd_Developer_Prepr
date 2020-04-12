import React from "react";
import styles from "./Kenny_Gosai_FrontEnd_Developer_styles.module.css";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ExploreButton from "../Kenny_Gosai_FrontEnd_Developer_Buttons/Kenny_Gosai_FrontEnd_Developer_ExploreButton/Kenny_Gosai_FrontEnd_Developer_index";

const ScrollableButtons = (props) => {
  return (
    <div className={styles.entireContainer}>
      <div color="primary" className={styles.fabStyleLeft}>
        <ChevronLeftRoundedIcon></ChevronLeftRoundedIcon>
      </div>
      <div className={styles.scrollingWrapper} id={"scrollingWrapper"}>
        {Object.keys(props.dataSent).map((key, index) => {
          return (
            <div className={styles.card}>
              <ExploreButton key={key}></ExploreButton>{" "}
            </div>
          );
        })}
      </div>
      <div color="primary" className={styles.fabStyleRight}>
        <ChevronRightRoundedIcon></ChevronRightRoundedIcon>
      </div>
    </div>
  );
};
export default ScrollableButtons;
