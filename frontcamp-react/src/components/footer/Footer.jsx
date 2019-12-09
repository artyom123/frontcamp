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
        <Container
            className={classes.container}
        >
            <Grid>
                <Logo />
            </Grid>
        </Container>
    );
};

export default Footer;
