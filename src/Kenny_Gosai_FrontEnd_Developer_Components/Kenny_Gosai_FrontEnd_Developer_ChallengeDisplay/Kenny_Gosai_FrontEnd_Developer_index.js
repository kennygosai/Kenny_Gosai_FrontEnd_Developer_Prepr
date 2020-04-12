import React from 'react';
import { makeStyles, StylesProvider} from '@material-ui/core/styles';
import PrimarySearchAppBar from '../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_PrimarySearchAppBar/Kenny_Gosai_FrontEnd_Developer_index'
import styles from './Kenny_Gosai_FrontEnd_Developer_styles.module.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ColorStyle from '../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_ColorStyle';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import { Divider, Button } from '@material-ui/core';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import Discussion from './Kenny_Gosai_FrontEnd_Developer_Discussion/Kenny_Gosai_FrontEnd_Developer_index';
import MediaCard from '../Kenny_Gosai_FrontEnd_Developer_MediaCard/Kenny_Gosai_FrontEnd_Developer_index'
import AvatarDisplay from '../Kenny_Gosai_FrontEnd_Developer_AvatarDisplay/Kenny_Gosai_FrontEnd_Developer_index';


const useStyles = makeStyles((theme) => ({
    moreButton: {
        height: 30
    },
    background: {
        background: '#86B99C',
        // height: '25vh',
        paddingTop: '25px',
        paddingLeft:  '25px',
        [theme.breakpoints.down('sm')]: {
            height: '262px',
          },
          [theme.breakpoints.up('md')]: {
            height: '143px',
          },
          [theme.breakpoints.up('lg')]: {
            height: '159px',
          },
    },
    lowerBackground: {
        background: '#F3F7FC',
        height: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        
        // flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            flexWrap: 'wrap'
          },
          [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
          },
          [theme.breakpoints.up('lg')]: {
            justifyContent: 'space-between',
          },
        
    },
    paperStyle: {
        // width: '50%',
        marginLeft: '25px',
        marginTop: '25px',
        marginRight: '25px',
        marginBottom: '25px',
        paddingBottom:'25px',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
          },
          [theme.breakpoints.up('md')]: {
            width: '300px',
          },
          [theme.breakpoints.up('lg')]: {
            width: '50%',
          },
        
    },
    hostContainer: {
        display: 'flex'
    },
    wrappedContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px',
        justifyContent: 'center'
    },
    submitButtonContainer: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            // flexWrap: 'wrap',
          },
          [theme.breakpoints.up('md')]: {
            // flexWrap: 'wrap',
            marginLeft: '10px',
            marginTop: '10px'
          },
          [theme.breakpoints.up('lg')]: {
            // width: '50%',
          },
        
    },
    buttonStyling: {
        // paddingRight: '10px',
        marginRight: '10px',
    },
    
  }));

  const submissionData = {
      1: {
          title: 'Prepr Frontend Re-design',
          url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/projects/files/BP1QQ3K8FC6KMT5SwvCaFxMNbp34E5fSJfEaoSW1.png',
          content: 'Currently: IN PROGRESS https://github.com/akassab/PreprFrontEndChallenge/blob/master/readme.md'
      },
      2: {
          title: 'Aarjav_C_FrontEnd_Developer',
          url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/projects/files/6uJYnRpjzyrjv0sISPyOBURpHNxhlox1hOx93lsU.jpeg',
          content: 'Status : In Progress Redesign a few key pages of the Prepr Network. 1. Explore page 2. Projects page 3. Challenges page 4. Challenge details page 5. Labs page'
      },
      3: {
          title: 'Din_Lanh_FrontEnd_Challenge',
          url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/projects/avatar_standard.png',
          content: 'https://github.com/langdin/frontend_challenge couldnt upload folders here....'
      },
      4: {
          title: 'Sahil_Front_End_Challenge',
          url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/projects/Screen%20Shot%202020-04-11%20at%204.03.57%20PM.png',
          content: 'Github link to the project: https://github.com/thuertas/FrontEnd_Developer_Challenge *The design was considered for the cases when the user is already logged in *The website can be found here: https://thuertas.github.io/FrontEnd_Developer_Challenge/'
      }
  }

const ChallengeDisplay = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    console.log(value);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const members = 
                    <div>
                        <div>
                            <div className={styles.subHeading}>Admin and Moderators</div>
                            <div style={{'padding-left': '25px', 'padding-top': '25px'}}><AvatarDisplay ></AvatarDisplay></div>
                            <div className={styles.generalMembers}>General Members</div>
                            
                        </div>
                    </div>;
    const general = 
                    <div>
                        <div className= {styles.subHeading}>Requirements</div>
                        <div className={styles.generalInfo}>
                            {/* <img src={}></img> */}
                            Apply before Apr 12th, 2020
                        </div>
                        <div className={styles.generalInfo}>
                            {/* <img src={}></img> */}
                            Learn Rank 0
                        </div>
                        <div className= {styles.subHeading}>General</div>
                        <div className={styles.generalInfo}> Your task is to redesign a few key pages of the Prepr Network. Reimagine and create frontend webpages of the following pages (and possible sub-pages):</div>
                        <ul className={styles.list}>
                            <li>Explore page (https://preprlabs.org/)</li>
                            <li>Projects page (https://preprlabs.org/myProjects)</li>
                            <li>Challenges page (https://preprlabs.org/list/challenge)</li>
                            <li>Challenge details page (https://preprlabs.org/challengeManager/front-end-developer-work-challenge)</li>
                            <li>Labs page (https://preprlabs.org/joinedLab)</li>
                        </ul>
                        <div className={styles.generalInfo}>Do not be restrained by the current design and layout of the pages. However, do ensure that pages can perform their respective functions. Feel free to add additional details and functions, anything that you believe will result in the best user experience.</div>
                        <div className={styles.generalInfo}>(eg. In the explore page, each challenge card can contain more information than just the description)</div>
                        <div className={styles.generalInfo}>You may use any frontend technologies you want. You do not need to create any backend functionality (you can hardcode details and images into the web pages).</div>
                        <div className= {styles.subHeading}>Submission Process: </div>
                        <div className={styles.generalInfo}>
                        Please begin by creating a Project. Your Project should contain both the final output and a Github link to your source code. Please name all of your files and documents using the following convention:
                        </div>
                        <div className={styles.generalInfo}>John_Smith_FrontEnd_Developer_Nameofyourfile.</div>
                        <div className={styles.generalInfo}>Once the project is completed, you will be able to submit it here to the Work Challenge. </div>
                        <Divider style={{'margin-top': '10px'}}></Divider>
                        <div>
                            <div className= {styles.subHeading}>Host</div>
                            <div className={classes.hostContainer}>
                                <img style={{'width': '25%', 'height': '100%'}}src="https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/organisation/YlyHSvMYpa6m2g22lybhG5ahOZMiLiABF4q8WEh0.png"></img>
                                <div>
                                <div className ={styles.subHeading2}>Prepr</div>
                                <div className={styles.generalInfo} >The Prepr Network connects students and start-ups to employees and employers in order to build skills, create verifiable portfolios and tackle challenges. We do this by creating dedicated labs for individuals and teams to co-learn and co-lab together in order to co-solve organizational challenges.</div>
                                </div>
                                
                            </div>
                        </div>
                        


                    </div>;
    let display = 0;
    switch(value) {
        case 0:
            display = general;
          // code block
          break;
        case 1:
            display = <div style={{'padding-left': '25px', 'padding-top': '25px'}}><Discussion></Discussion></div>
          // code block
          break;
        case 2:
            display = 
            <div className={classes.wrappedContainer}>
            {Object.keys(submissionData).map((key, index) => {
                return <MediaCard data={submissionData[key]} key ={key}></MediaCard>
            })}
            </div>
            break;
        case 3:
            display = members;
            break;
        default:
          // code block
      }
    return(
        <PrimarySearchAppBar>
            <ColorStyle>
                <div className={classes.background}>
                    <div className={styles.title}>Challenge</div>
                    
                </div>
                <div className={classes.lowerBackground}>
                        
                        <div>
                            {/* This is cool */}
                            {/* <div className={styles.mainImage}>

                            </div> */}
                            <img className={styles.mainImage} src="https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/SOj5KzEt9AdhCwltdRZMVxxKXwIkE98RxqKKFxQ4.jpeg"></img>
                           <div >
                           
                                    <div className={styles.challengeTitle}>Front End Developer Work Challenge</div>
                                    <div style={{'display': 'flex', 'padding-left': '10px'}}> 
                                        <EventRoundedIcon color="primary"></EventRoundedIcon>
                                        <div style={{'padding-left': '10px'}}>Apr 09th,2020 - Apr 12th,2020</div>
                                    </div>
                                </div>
                                <div className= {classes.submitButtonContainer}>
                                <Button variant="contained" color="primary" className={classes.buttonStyling}>
                                    SUBMIT
                                </Button>
                                <Button variant="outlined" color="primary" className={classes.buttonStyling}>
                                    FOLLOW
                                </Button>
                                <Button variant="outlined" color="primary" className={classes.buttonStyling}>
                                    <FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
                                </Button>
                                <Button variant="outlined" color="primary" className={classes.buttonStyling}>
                                    <ShareRoundedIcon></ShareRoundedIcon>
                                </Button>
                                </div>
                            
                            <div style={{'display': 'flex', 'padding-left': '10px'}}> 
                                <img src="https://preprmedialive.s3.amazonaws.com/public/front/img/no-img.jpg" className={styles.iconImage}></img>
                                <div style={{'padding-left': '10px', 'padding-top': '25px'}}>Participant : - 0 points</div>
                            </div>
                            <div style={{'padding-left': '10px', 'padding-top': '25px'}}>Challenge Skills</div>
                            <div style={{'padding-left': '10px', 'padding-top': '25px'}}>Challenge Tags</div>


                        </div>
                        <Paper className={classes.paperStyle}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                            scrollButtons="auto"
                        >
                            <Tab label="Overview" />
                            <Tab label="Discussion" />
                            <Tab label="Submissions" />
                            <Tab label="Members" />
                        </Tabs>
                        {display}
                        </Paper>
                </div>
            </ColorStyle>
        </PrimarySearchAppBar>
    );
}

export default ChallengeDisplay;