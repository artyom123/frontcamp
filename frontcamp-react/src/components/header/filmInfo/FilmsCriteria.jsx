import React from 'react';
import { Grid } from '@material-ui/core';

const FilmsCriteria = ({ criteriaValue, criteria }) => (
    <Grid>
        Films by {criteriaValue} {criteria}
    </Grid>
);

export default FilmsCriteria;