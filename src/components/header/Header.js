import React from 'react';
import './Header.css';
import Grid from '@material-ui/core/Grid';
import AlarmIcon from '@material-ui/icons/Alarm';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

function Header() {
    return (
        <AppBar style={{ background: '#1b262c' }} position="static">
            <Toolbar>
                <Grid justify="space-between"
                    container
                    spacing={12}
                >
                    <Grid item>
                        <Typography variant="h4">
                            PomoSession <DoneAllIcon fontSize="Large"/>
                        </Typography>
                    </Grid>

                    <Grid item>
                        <IconButton href="https://github.com/donovanolivarez" color="inherit">
                            <GitHubIcon fontSize="Large"/>
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/donovan-olivarez-571108191/" color="inherit">
                            <LinkedInIcon fontSize="Large"/>
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;