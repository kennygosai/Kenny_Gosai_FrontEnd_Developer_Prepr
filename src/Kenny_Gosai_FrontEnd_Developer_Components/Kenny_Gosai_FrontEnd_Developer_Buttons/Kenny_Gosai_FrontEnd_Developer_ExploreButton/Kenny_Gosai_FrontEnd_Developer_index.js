import React from "react";
import styles from './Kenny_Gosai_FrontEnd_Developer_styles.module.css'
import Typography from '@material-ui/core/Typography';

const ExploreButton = () => {
 return(
    <div className={styles.buttonContainer}>
        <img className={styles.imgButton} src="https://preprmedialive.s3.ca-central-1.amazonaws.com/uploads/challenge/tmx4zAFyMKbA39JouysPRFqor.jpg"></img>
        <Typography variant="h6">Low-cost sensor system for COVID-19 patient monitoring</Typography>
        <Typography variant="body2" className={styles.description}>NRC is seeking a low cost system that can continuously measure temperature, peripheral capillary oxygen saturation (SpO2), blood pressure (BP), pulse and respiration rates, and transmit this information wirelessly to a base station for COVID-19 patient monitoring in locales including ERs, general wards, communities and homes.</Typography>
    </div>
 );
}

export default ExploreButton;