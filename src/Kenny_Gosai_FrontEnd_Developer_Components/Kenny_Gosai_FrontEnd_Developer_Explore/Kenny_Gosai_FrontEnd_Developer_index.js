import React from "react";
import PrimarySearchAppBar from "../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_PrimarySearchAppBar/Kenny_Gosai_FrontEnd_Developer_index";
import styles from "./Kenny_Gosai_FrontEnd_Developer_styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import ColorStyle from "../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_ColorStyle";
import "react-alice-carousel/lib/alice-carousel.css";
import LongButton from "../Kenny_Gosai_FrontEnd_Developer_Buttons/Kenny_Gosai_FrontEnd_Developer_LongButtons/Kenny_Gosai_FrontEnd_Developer_index";
import Pagination from "@material-ui/lab/Pagination";
const useStyles = makeStyles((theme) => ({
  moreButton: {
    height: 30,
  },
  background: {
    background: "#86B99C",
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
  lowerBackground: {
    background: "#F3F7FC",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    margin: "auto",
    paddingTop: "25px",
  },
  pageTabs: {
    background: "#F3F7FC",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "25px",
    paddingBottom: "25px",
  },
}));
const data = {
  1: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/SOj5KzEt9AdhCwltdRZMVxxKXwIkE98RxqKKFxQ4.jpeg",
    title: "Front End Developer Work Challenge",
    creator: "Prepr",
    to:
      "/Kenny_Gosai_FrontEnd_Developer_Prepr/challengeManager/front-end-developer-work-challenge",
    general:
      "Your task is to redesign a few key pages of the Prepr Network. Reimagine and create frontend webpages of the following pages (and possible sub-pages): Do not be restrained by the current design and layout of the pages. However, do ensure that pages can perform their respective functions. Feel free to add additional details and functions, anything that you believe will result in the best user experience. (eg. In the explore page, each challenge card can contain more information than just the description) You may use any frontend technologies you want. You do not need to create any backend functionality (you can hardcode details and images into the web pages).",
  },
  2: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/LGtxjGeIkje2QJm7GPK5s4So4.png",
    title: "Recycled Plastic Ceiling Tiles",
    creator: "Innovative Solutions Canada",
    to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    general:
      "View more details and submit the project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00090.html",
  },
  3: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/TAYbhXQ5Nbbc4Zfm2qhrc5QAi.png",
    title: "E-Waste",
    creator: "Innovative Solutions Canada",
    to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    general:
      "View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00085.html",
  },
  4: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/u5jflO7eH9zXK99FrOYYv1Fc8.png",
    title: "Sustainable Alternatives to Plastic Packaging",
    creator: "Innovative Solutions Canada",
    to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    general:
      "View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00087.html",
  },
  5: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/2OP2IlVjNsYXZ0mGlbzkIERls.png",
    title: "Textiles and Microfibers",
    creator: "Innovative Solutions Canada",
    to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    general:
      "View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00086.html",
  },
  6: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/TAYbhXQ5Nbbc4Zfm2qhrc5QAi.png",
    title: "E-Waste",
    creator: "Innovative Solutions Canada",
    to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    general:
      "View more details and submit your project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00085.html",
  },
  7: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/LGtxjGeIkje2QJm7GPK5s4So4.png",
    title: "Recycled Plastic Ceiling Tiles",
    creator: "Innovative Solutions Canada",
    to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    general:
      "View more details and submit the project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00090.html",
  },
  8: {
    url:
      "https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/LGtxjGeIkje2QJm7GPK5s4So4.png",
    title: "Recycled Plastic Ceiling Tiles",
    creator: "Innovative Solutions Canada",
    to: "/Kenny_Gosai_FrontEnd_Developer_Prepr",
    general:
      "View more details and submit the project here: https://www.ic.gc.ca/eic/site/101.nsf/eng/00090.html",
  },
};

const Explore = () => {
  const classes = useStyles();
  const [dataDisplayed, setDataDisplayed] = React.useState(
    Object.keys(data).splice(0, 4)
  );
  const handleDisplayChange = (event, page) => {
    setDataDisplayed(Object.keys(data).splice(page * 4 - 4, page * 4));
  };
  return (
    <PrimarySearchAppBar>
      <ColorStyle>
        <div className={classes.background}>
          <div className={styles.title}>Explore</div>
        </div>
        <div className={classes.lowerBackground}>
          {dataDisplayed.map((key, index) => {
            return (
              <LongButton
                delete={"none"}
                key={key}
                data={data[key]}
              ></LongButton>
            );
          })}
        </div>
        <div className={classes.pageTabs}>
          <Pagination
            count={2}
            variant="outlined"
            onChange={handleDisplayChange}
          />
        </div>
      </ColorStyle>
    </PrimarySearchAppBar>
  );
};

export default Explore;
