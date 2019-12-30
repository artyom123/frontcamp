import React from 'react';
import {
    makeStyles,
    Container,
    Grid,
} from '@material-ui/core';

import Logo from '../header/logo/Logo';

import stylesConstants from '../../styles/constants.module.scss';

const useStyles = makeStyles({
    container: {
        backgroundColor: stylesConstants.secondaryGray,
        padding: '20px',
        textAlign: 'center',
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid
            className={classes.container}
        >
            <Container>
                <Logo />
            </Container>
        </Grid>
    );
};

export default Footer;
