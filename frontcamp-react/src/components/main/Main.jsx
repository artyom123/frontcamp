import React from 'react';
import { makeStyles, Container, Grid } from '@material-ui/core';

import films from '../../data/films';

import CountFilm from './countFilm/CountFilm';
import Filter from '../header/filter/Filter';
import Film from './film/Film';

import stylesConstants from '../../styles/constants.module.scss';

const useStyles = makeStyles({
    containerCountFilm: {
        paddingTop: '20px',
        paddingBottom: '20px',
        backgroundColor: stylesConstants.secondaryLightGray,
    },
    gridCountFilm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: 'rgba(255, 255, 255, 0.7)',
    },
    containerFilms: {
        backgroundColor: stylesConstants.secondaryDarkGray,
    },
    gridFilms: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});

const Main = () => {
    const classes = useStyles();

    const filter = {
        tabsInfo: "Sort by",
        tabsList: ['release date', 'rating'],
    };

    return (
        <>
            <Container
                className={classes.containerCountFilm}
            >
                <Grid 
                    className={classes.gridCountFilm}
                >
                    <CountFilm count={films.length}/>
                    <Filter
                        key={filter.tabsInfo}
                        tabsInfo={filter.tabsInfo}
                        tabsList={filter.tabsList}
                    />
                </Grid>
            </Container>
            <Container
                className={classes.containerFilms}
            >
                <Grid className={classes.gridFilms}>
                    {
                        films.map((item) =>
                            <Film key={`${item.title}-${item.year}`} film={item}/>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Main;