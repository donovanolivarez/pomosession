import React from 'react';
import './Header.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

function Header() {
    return (
        <AppBar style={{ background: '#1b262c' }} position="static">
            <Toolbar>
                <Grid justify="space-between"
                    container
                    spacing={5}
                >
                    <Grid item>
                        <Typography variant="h4">
                            PomoSession <DoneAllIcon fontSize="large" />
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Tooltip title="Check out my github.">
                            <IconButton href="https://github.com/donovanolivarez" color="inherit">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="See my LinkedIn page.">
                            <IconButton href="https://www.linkedin.com/in/donovan-olivarez-571108191/" color="inherit">
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;