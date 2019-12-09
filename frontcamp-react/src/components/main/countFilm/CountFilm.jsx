import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const propTypes = {
    count: PropTypes.number,
};
const defaultProps = {
    count: 0,
};

const CountFilm = ({count}) => (
    <Grid>
        <strong>{`${count} `}</strong> 
        movie found
    </Grid>
);

CountFilm.propTypes = propTypes;
CountFilm.defaultProps = defaultProps;

export default CountFilm;