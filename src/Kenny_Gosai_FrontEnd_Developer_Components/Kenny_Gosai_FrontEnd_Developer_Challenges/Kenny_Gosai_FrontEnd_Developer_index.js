import React from 'react';
import PrimarySearchAppBar from '../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_PrimarySearchAppBar/Kenny_Gosai_FrontEnd_Developer_index'
import { makeStyles, StylesProvider} from '@material-ui/core/styles';
import styles from './Kenny_Gosai_FrontEnd_Developer_styles.module.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core'
import ColorStyle from '../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_ColorStyle';
import LongButton from '../Kenny_Gosai_FrontEnd_Developer_LongButtons/Kenny_Gosai_FrontEnd_Developer_index';
import Pagination from '@material-ui/lab/Pagination';
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
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    buttons:{
        margin: 'auto',
        paddingTop: '25px',

    },
    pageTabs:{
        background: '#F3F7FC',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '25px',
        paddingBottom: '25px',

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        background: "white"
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      },
      buttonStyle: {
          marginTop: theme.spacing(2)
        //   color: '#FFFFFF'
      }
  }));

  const data = {
    1: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/M3qyrzWFGUn4f4BogEzjrP5nJ0Us5kx4KGjdDNb4.png' ,
        title: 'No Poverty Challenge',
        creator: 'Prepr',
        general: 'The global poverty rate has halved since 2000 and despite the trend leading downwards since it seems to be flattening out since 2016. Together, we can challenge poverty and the economic systems that allow it to remain. Regardless of the world being more prosperous than ever before, inequality and wage disparity is at an all-time high. Eradicating poverty is not a task of charity but an act of justice.'
    },
    2: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/n3OimEwYjW5uJgg4JS9tj6oXhSBlg55B8Mef6yjx.png' ,
        title: 'Zero Hunger Challenge',
        creator: 'Prepr',
        general: 'Conflict and insecurity are the main drivers in 18 countries, where about 74 million people are in urgent need of assistance. Ending world hunger is a challenge that affects us all.Countries such as Yemen, Nigeria, The Democratic Republic of Congo, South Sudan, and Myanmar are some of the most affected by conflict, political, and social insecurity. A combination of conflict and severe drought in southern and eastern Africa caused consecutive poor harvests. Disease outbreak, economic collapse, conflict, insecurity, and war continue to drive food insecurity.  '
    },
    3: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/LNZQpLzGKZpk2dqKtsSfG7QklYK7f5nEM8gjG8zc.png',
        title: 'Good Health and Well-Being Challenge',
        creator: 'Prepr',
        general: 'We are spending an astonishing amount of money, and exhausting exponential resources, treating illnesses that are easily preventable. Promoting and educating a healthy lifestyle, putting in place preventive measures, and modern healthcare is at the forefront of ensuring our future is a bright, healthy, and sustainable one.'
    },
    4: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/z93GqGFOZlp0dXrYL2o9L2Y2ZEmVUTUUaSDbqZ9O.png',
        title: 'Quality Education Challenge',
        creator: 'Prepr',
        general: 'Education is at the center of solving global challenges. A meaningful education equips children with the skills needed to be responsible citizens and care about the economy, health, gender equality, and environmental sustainability. Investing in education is crucial to the overall development of any country and its people.'
    },
    5: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/1p9RkaCxoNNrQaj5ISwBcQLVWmfDjpcShom2G16p.png',
        title: 'Gender Equality Challenge',
        creator: 'Prepr',
        general: 'Gender equality is fundamental to the social and economic growth of the global community. Ending all forms of discrimination against women is crucial to accelerating sustainable development and achieving global goals. Time and time again, it has been proven that empowering girls and women has a compounding effect of inclusiveness, equality, and the foundations for successful and sustainable communities where the needs of all genders are met. It’s imperative that we work together to break down the existing gender barriers and liberate all women worldwide. We must encourage women to engage in politics, labor, leadership, and community to ensure a prolific and abundant future for our global economy.'
    },
    6: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/rg6JEFcfGzE18u5e5wRvx9QDgeHm9pHTWE5BaGPH.png',
        title: 'Clean Water and Sanitation Challenge',
        creator: 'Prepr',
        general: 'Access to clean water and safe sanitation is essential, yet billions of people still lack safe water. Effective creation and management of freshwater systems are necessary to have a sustainable environment and achieve economic prosperity. For many in rural areas, not having fresh, clean water is the defining source of poverty, hunger, malnutrition, sanitation, and cleanliness.'
    },
    7: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/W92awTfIrIRrnQlfbCwp2hHppoAeFqAzv4PJGzZQ.png',
        title: 'Affordable Energy Challenge',
        creator: 'Prepr',
        general: 'Despite yearly increases in global affordable and clean energy production, every area of sustainable energy falls short of the needs in order to meet the target goals for 2030. Lower costs and improvements of technology have, and will, play a large part in delivering electricity and energy to geographic locations that were previously “off the grid”, but these meaningful improvements will require higher levels of finance, innovation, and commitment. It’s important going forward, that institutions, governments, and organizations implement the correct strategies, policies, regulations, and incentives to continue to push renewable energy as the main source of power on our planet.'
    },
    8: {
        url: 'https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/E2GWvg5y6LL0PeWLLmP64gY6IpKrBYRhAREz68oD.png',
        title: 'Decent Wages and Economic Growth Challenge',
        general: 'Over the past 25 years, we have seen tremendous declines in workers living in extreme poverty. Even with these progressions, we are observing larger economic inequalities, slower growth, and a surplus of labourers to job opportunities. Increasing productivity, reducing unemployment, and increasing access to financial services and benefits are key components for sustained and inclusive economic growth.'
    }
}
const Challenges = () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState("");
    const [challengesCat, setchallengesCat] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [privacy, setPrivacy] = React.useState("");

    const [dataDisplayed, setDataDisplayed] = React.useState(Object.keys(data).splice(0,4));

    console.log(dataDisplayed)
  const handleLocationChange = event => {
    setLocation(event.target.value);
  };
  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };
  const handlechallengesCatChange = event => {
    setchallengesCat(event.target.value);
  };
  const handleprivacyChange = event => {
    setPrivacy(event.target.value);
  };
  const handleDisplayChange = (event,page) => {
    setDataDisplayed(Object.keys(data).splice(page*4-4,page*4));
  };
  
    return(
        
        <PrimarySearchAppBar>
            <ColorStyle>
            <div className={classes.background}>
                <div className={styles.title}>Challenges</div>
                <Box 
                    display="flex" 
                    // width={500} height={80} 
                    // bgcolor="lightgreen"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={category}
                        onChange={handleCategoryChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Incubators</MenuItem>
                        <MenuItem value={20}>Accelerators</MenuItem>
                        <MenuItem value={30}>Co-working Space</MenuItem>
                        <MenuItem value={30}>Corporate Innovation Lab</MenuItem>
                        <MenuItem value={30}>Technology and Science Park</MenuItem>
                        <MenuItem value={30}>Entrepreneurship Support Organization</MenuItem>
                        <MenuItem value={30}>Venture Capital</MenuItem>
                        <MenuItem value={30}>University</MenuItem>
                        <MenuItem value={30}>High School</MenuItem>
                        <MenuItem value={30}>Government</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={challengesCat}
                        onChange={handlechallengesCatChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Browse</MenuItem>
                        <MenuItem value={20}>Submitted</MenuItem>
                        <MenuItem value={30}>Following</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Location</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={location}
                        onChange={handleLocationChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>Location</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Privacy</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={privacy}
                        onChange={handleprivacyChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Public</MenuItem>
                        <MenuItem value={20}>Private</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" size="large" color="secondary" className={classes.buttonStyle}>
                        Apply Filter
                    </Button>
                </Box>
            </div>
            <div className={classes.lowerBackground}>
                {/* <div className={classes.buttons}> */}
                    {dataDisplayed.map((key, index) => {
                        return <LongButton delete={'none'} key={key} data={data[key]}></LongButton>
                    })}
                   
                {/* </div> */}
                
            </div>
            <div className={classes.pageTabs}>
                        <Pagination count={2} variant="outlined" onChange={handleDisplayChange}/>
            </div>
            </ColorStyle>
        </PrimarySearchAppBar>
        
    );
}
export default Challenges;