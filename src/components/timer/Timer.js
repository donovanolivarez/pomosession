import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './Timer.css';

function Timer(props) {

    return (
        <div className="timer-main">
            <Container maxWidth="sm">
                <h1 className="timer-actual">{props.time}</h1>
                <div className="btn">
                    <Button variant="contained" color="primary" onClick={props.handleClick}>{props.labelText}</Button>
                </div>
                <div className="btn">
                    <Button color="secondary" variant="contained" onClick={props.handleReset}>Reset</Button>
                </div>
            </Container>
        </div>
    )
}

export default Timer;