import React from 'react';
import { Grid } from '@material-ui/core';

import FilmsContainer from './film/FilmsContainer';
import CountFilms from './count/CountFilms';

const Main = ({films}) => (
    <Grid>
        <Grid>
            <CountFilms count={films.length}/>
        </Grid>
        <Grid>
            <FilmsContainer items={films}/>
        </Grid>
    </Grid>
);

export default Main;
