import React from 'react';
import './Information.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Information() {
    return (
        <div className="info-main">
            <Container>
                <Paper elevation={4}>
                    <Typography variant="h4">How to Use the Pomodoro Technique</Typography>
                    <Typography variant="body1">
                        <p> - Simply start the timer, and focus on the task at hand. Do not allow distractions to break your focus.</p>
                        <p> - When the timer hits zero, you are allowed a 5 minute break. The breaks are important to making the most of the technique!</p>
                        <p> - After 4 cycles, take a longer 15 - 20 minute break.</p>
                    </Typography>

                    <hr />
                    <Typography variant="h4">More About the Pomodoro Technique</Typography>
                    <Typography variant="body1">
                        <p>Many studies show that adoption of this technique provides benefits such as:</p>

                    </Typography>
                </Paper>
            </Container>
        </div>
    );
}
export default Information;