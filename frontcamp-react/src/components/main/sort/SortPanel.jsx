import React from 'react';
import {connect} from 'react-redux';
import {
    makeStyles,
    Container,
    Grid,
} from '@material-ui/core';

import Filter from '../../header/filter/Filter';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

const SortPanel = ({ count, active, items, setSorting }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid>
                <strong>{count}</strong> movies found
            </Grid>
            <Filter
                content="Sort by"
                value={active}
                items={items}
                setActive={setSorting}
            />
        </Container>
    );
};

function mapStateToProps (state){
    return {
        items: state.movies.sortBy.values,
        active: state.movies.sortBy.active,
    };
};

function mapDispatchToProps (dispatch){
    return {
        setSorting: (value) => {
            dispatch({
                type: 'SORT_BY',
                active: value,
            });
            dispatch({
                type: 'MOVIES_FETCH',
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
