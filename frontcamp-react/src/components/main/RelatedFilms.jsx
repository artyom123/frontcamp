import React from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';

import FilmsContainer from './film/FilmsContainer';
import FilmsCriteria from '../header/filmInfo/FilmsCriteria';

import stylesConstants from '../../styles/constants.module.scss';

const useStyles = makeStyles({
    criteria: {
        backgroundColor: stylesConstants.secondaryLightGray,
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    container: {
        backgroundColor: stylesConstants.secondaryDarkGray,
    },
});

const RelatedFilms = ({ criteria, criteriaValue, items }) => {
    const classes = useStyles();

    return (
        <>
            <Grid className={classes.criteria}>
                <Container>
                    <FilmsCriteria
                        criteria={criteria}
                        criteriaValue={criteriaValue}
                    />
                </Container>
            </Grid>
            <Grid className={classes.container}>
                <FilmsContainer items={items}/>
            </Grid>
        </>
    );
};

export default RelatedFilms;
