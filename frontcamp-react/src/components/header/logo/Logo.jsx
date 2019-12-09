import React from 'react';
import { makeStyles, Link } from '@material-ui/core';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    link: {
        color: stylesConstants.primaryRed,
    },
});

const Logo = () => {
    const classes = useStyles();

    return (
        <Link className={classes.link}>
            <strong>netflix</strong>
            roulette
        </Link>
    );
};

export default Logo;