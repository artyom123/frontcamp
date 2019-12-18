import React from 'react';
import {
    makeStyles,
    Container,
    Grid,
} from '@material-ui/core';

import Search from './search/Search';
import Logo from './logo/Logo';

import stylesConstants from '../../styles/constants.module.scss';

const useStyles = makeStyles({
    grid: {
        backgroundColor: stylesConstants.secondaryDarkGray,
        paddingTop: '20px',
        paddingBottom: '20px',
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid}>
            <Container>
                <Logo />
                <Search/>
            </Container>
        </Grid>
    );
};

export default Header;
