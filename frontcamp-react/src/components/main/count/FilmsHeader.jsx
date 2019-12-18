import React from 'react';
import {connect} from 'react-redux';
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

const FilmsHeader = (props) => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid}>
            <Container className={classes.container}>
                <Grid>
                    <strong>{props.count}</strong> movies found
                </Grid>
                <Filter
                    content="Sort by"
                    value={props.active}
                    items={props.items}
                    setActive={props.setSorting}
                />
            </Container>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmsHeader);
