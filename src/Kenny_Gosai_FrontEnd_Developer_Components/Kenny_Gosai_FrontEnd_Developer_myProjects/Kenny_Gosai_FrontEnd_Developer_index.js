import React from "react";
import PrimarySearchBar from "../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_PrimarySearchAppBar/Kenny_Gosai_FrontEnd_Developer_index";
import styles from "./Kenny_Gosai_FrontEnd_Developer_styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import LongButton from "../Kenny_Gosai_FrontEnd_Developer_Buttons/Kenny_Gosai_FrontEnd_Developer_LongButtons/Kenny_Gosai_FrontEnd_Developer_index";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  moreButton: {
    height: 30,
  },
  background: {
    background: "#86B99C",
    // height: '20vh',
    paddingTop: "25px",
    paddingLeft: "25px",
    [theme.breakpoints.down("sm")]: {
      height: "262px",
    },
    [theme.breakpoints.up("md")]: {
      height: "143px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "159px",
    },
  },
  toggle: {
    right: 0,
  },
}));
const MyProject = () => {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState("left");
  const [projectData, setProjectData] = React.useState({
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/SOj5KzEt9AdhCwltdRZMVxxKXwIkE98RxqKKFxQ4.jpeg",
    title: "Prepr Redesign",
    creator: "Kenny Gosai",
    to:
      "/Kenny_Gosai_FrontEnd_Developer_Prepr/challengeManager/front-end-developer-work-challenge",
    general: "Submission to Front End Developer Work Challenge",
  });
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const remove = () => {
    setProjectData(null);
  };
  return (
    <PrimarySearchBar>
      <div className={classes.background}>
        <div className={styles.title}>My Projects</div>
      </div>
      <Grid
        container
        alignItems="flex-start"
        justify="flex-end"
        direction="row"
        style={{ "padding-right": "25px", "padding-top": "25px" }}
      >
        <ToggleButtonGroup
          size="large"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton key={1} value="left">
            My Projects
          </ToggleButton>
          ,
          <ToggleButton key={2} value="justify">
            Invited Projects
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      {projectData != null ? (
        <div className={styles.container}>
          <IconButton
            aria-label="delete"
            className={classes.margin}
            onClick={remove}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
          <LongButton data={projectData} remove={remove}></LongButton>
        </div>
      ) : null}
    </PrimarySearchBar>
  );
};
export default MyProject;
