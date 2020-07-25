import React from 'react';
import './Information.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Information() {
    return (
        <div className="info-main">
            <Container>
                <Paper elevation={4}>
                    <Typography component={'span'} variant="h4">How to Use the Pomodoro Technique</Typography>
                    <Typography component={'span'} variant="body1">
                        <p> - Simply start the timer, and focus on the task at hand. Do not allow distractions to break your focus.</p>
                        <p> - When the timer hits zero, you are allowed a 5 minute break. The breaks are important to making the most of the technique!</p>
                        <p> - After 4 cycles, take a longer 15 - 20 minute break.</p>
                    </Typography>

                    <hr />
                    <Typography component={'span'} variant="h4">Links on Focus and Productivity</Typography>
                    <Typography component={'span'} variant="body1">
                        <p>
                            <Link underline="hover" href="https://youtu.be/3E7hkPZ-HTk">Quit Social Media Talk</Link>
                        </p>
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
}
export default Information;