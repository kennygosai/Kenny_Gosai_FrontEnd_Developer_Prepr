import React from 'react';
import styles from './Kenny_Gosai_FrontEnd_Developer_styles.module.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

import ColorStyle from '../Kenny_Gosai_FrontEnd_Developer_HOC/Kenny_Gosai_FrontEnd_Developer_ColorStyle';
const LongButton = (props) => {
    return(
        <ColorStyle>
    <div className={styles.base} onClick={() => {props.history.push(props.data.to)}}>
        <img className={styles.imgProps} src={props.data.url}></img>
        <div>
            <div className={styles.container}>
                <div className={styles.title}>{props.data.title}</div>
                <div style={{'display': props.delete}}>
                    {/* <Button variant="contained" color="palette.error.dark" onClick={props.remove}>
                        <DeleteForeverIcon></DeleteForeverIcon>
                    </Button> */}
                </div>
            </div>
            <div className={styles.subheading}>{props.data.creator}</div>
            <div className={styles.content}>{props.data.general}</div>
        </div>
    </div>
    </ColorStyle>
    );
}

export default withRouter(LongButton);