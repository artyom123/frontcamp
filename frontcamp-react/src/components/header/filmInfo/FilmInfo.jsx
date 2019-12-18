import React from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    Link,
} from '@material-ui/core';

import Logo from '../logo/Logo';

const FilmInfo = ({film}) => {
    return (
        <Grid>
            <Grid>
                <Logo />

                <Link href="/">
                    Search
                </Link>
            </Grid>

            <Grid>
                <img src={film.poster_path}/>

                <Grid>
                    <Grid>
                        <Typography variant="h3">
                            {film.title}
                        </Typography>
                        <Grid>
                            {film.vote_average}
                        </Grid>
                    </Grid>

                    <Grid>
                        <Grid>
                            <Typography
                                    className={classes.cardInfoTitle}
                                    variant="body2"
                                    component="p"
                            >
                                {film.release_date}
                            </Typography>
                            year
                        </Grid>
                        {
                            film.runtime && (
                                <Grid>
                                    <Typography
                                            className={classes.cardInfoTitle}
                                            variant="body2"
                                            component="p"
                                    >
                                        {film.runtime}
                                    </Typography>
                                    min
                                </Grid>
                            )
                        }
                    </Grid>

                    <Grid>
                        {film.overview}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FilmInfo;
