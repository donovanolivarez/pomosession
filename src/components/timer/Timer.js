import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import RemoveIcon from '@material-ui/icons/Remove';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Tooltip from '@material-ui/core/Tooltip';
import './Timer.css';

function Timer(props) {

    var iconControl = false;
    return (
        <div className="timer-main">
            <Grid container direction="row" spacing={4} className="timer-adjust">
                <Grid item xs={12} md={4} >
                    <div className="btn-adjust">
                        <Tooltip title="add 5 minutes" placement="right">
                            <Button disabled={props.clicked} variant="contained" onClick={props.func.increase} size="large">
                                <AddIcon />
                            </Button>
                        </Tooltip>
                    </div>
                    <div className="btn-adjust">
                        <Tooltip title="remove 5 minutes" placement="right">
                            <Button disabled={props.clicked} variant="contained" onClick={props.func.decrease} size="large">
                                <RemoveIcon />
                            </Button>
                        </Tooltip>
                    </div>
                </Grid>

                <Grid item xs={12} md={4}>
                    <h1 className="timer-actual">{props.time}</h1>
                    <div className="btn">
                        <Tooltip title="Start, pause, or resume time." enterDelay={600} enterNextDelay={600}>
                            <Button variant="contained" size="large" color="primary" onClick={props.handleClick} startIcon={props.clicked ? <PauseIcon/> : <PlayArrowIcon/>}>{props.labelText}</Button>
                        </Tooltip>
                    </div>
                    <div className="btn">
                        <Tooltip title="Reset back to 25 minutes." enterDelay={600} enterNextDelay={600}>
                            <Button color="secondary" size="large" variant="contained" onClick={props.handleReset} startIcon={<RotateLeftIcon/>}>Reset</Button>
                        </Tooltip>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Timer;