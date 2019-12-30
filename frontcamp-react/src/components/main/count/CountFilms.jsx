import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    makeStyles,
    Grid,
    Container,
} from '@material-ui/core';

import Filter from '../../header/filter/Filter';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    grid: {
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: stylesConstants.secondaryLightGray,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

const CountFilms = ({count}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { sortBy } = useSelector((state) => ({
        sortBy: state.movies.sortBy,
    }), shallowEqual);

    const changeSortBy = (item) => {
        dispatch({
            type: 'SORT_BY',
            active: item,
        });
        dispatch({ type: 'MOVIES_FETCH' });
    };


    return (
        <Grid className={classes.grid}>
            <Container className={classes.container}>
                <Grid>
                    <strong>{count}</strong> movies found
                </Grid>
                <Filter
                    content="Sort by"
                    items={sortBy.values}
                    actionFilter={changeSortBy}
                />
            </Container>
        </Grid>
      );
};

export default CountFilms;
