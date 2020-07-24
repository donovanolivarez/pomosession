import React from 'react';
import Button from '@material-ui/core/Button'
import './Timer.css'

function Timer(props) {

    return (
        <div className="timer-main">
            <h1 className="timer-actual">{props.time}</h1>
            <div className="btn">
                <Button variant="contained" color="primary" onClick={props.handleClick}>{props.labelText}</Button>
            </div>
            <div className="btn">
                <Button color="secondary" variant="contained" onClick={props.handleReset}>Reset</Button>
            </div>
        </div>
    )
}

export default Timer;