import React from 'react';
import {
    makeStyles,
    Grid,
    Container,
    Typography,
    Link,
} from '@material-ui/core';

import Logo from '../logo/Logo';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    grid: {
        backgroundColor: stylesConstants.secondaryDarkGray,
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    containerHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    link: {
        color: stylesConstants.primaryWhite,
        backgroundColor: stylesConstants.primaryRed,
        padding: '2px 10px',
        borderRadius: '5px',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: stylesConstants.primaryRedLight,
        }
    },
    img: {
        width: '30%',
        marginRight: '20px',
    },
    containerInfoFilm: {
        display: 'flex',
    },
    gridFilm: {
        paddingTop: '20px',
    },
    gridFilmTitle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    raiting: {
        color: 'green',
        border: `1px solid ${stylesConstants.primaryWhite}`,
        width: '42px',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontSize: '26px',
    },
    title: {
        marginRight: '20px',
    },
    gridFlex: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
    },
    time: {
        color: stylesConstants.primaryRed,
        fontSize: '18px',
        marginRight: '5px',
    },
    gridDescription: {
        marginTop: '20px',
    },
});

const FilmInfo = ({film}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid}>
            <Container className={classes.containerHeader}>
                <Logo />

                <Link href="/" className={classes.link}>
                    Search
                </Link>
            </Container>

            <Container className={classes.containerInfoFilm}>
                <img
                    className={classes.img}
                    src={film.poster_path}
                />

                <Grid className={classes.gridFilm}>
                    <Grid className={classes.gridFilmTitle}>
                        <Typography variant="h4" className={classes.title}>
                            {film.title}
                        </Typography>
                        <Grid className={classes.raiting}>
                            {film.vote_average}
                        </Grid>
                    </Grid>

                    <Grid className={classes.gridFlex}>
                        <Grid className={classes.gridFlex}>
                            <Typography
                                    className={classes.time}
                                    variant="body2"
                                    component="p"
                            >
                                {film.release_date.slice(0, 4)}
                            </Typography>
                            year
                        </Grid>
                        {
                            film.runtime && (
                                <Grid className={classes.gridFlex}>
                                    <Typography
                                            className={classes.time}
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

                    <Grid className={classes.gridDescription}>
                        <Typography
                                variant="body2"
                                component="p"
                        >
                            {film.overview}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default FilmInfo;
