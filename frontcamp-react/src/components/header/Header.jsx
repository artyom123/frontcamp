import React from 'react';
import {
    Container,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

import Logo from './logo/Logo';
import SearchBar from './searchBar/SearchBar';

import stylesConstants from '../../styles/constants.module.scss';

const useStyles = makeStyles({
    container: {
        minHeight: '300px',
        backgroundColor: stylesConstants.secondaryDarkGray,
        paddingTop: '20px',
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '35px',
    },
    typography: {
        color: stylesConstants.primaryWhite,
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid>
                <Logo />
                <Grid className={classes.grid}>
                    <Typography
                        className={classes.typography}
                        variant="h4"
                    >
                        Find your movie
                    </Typography>
                    <SearchBar />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;