import React, { useRef, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    makeStyles,
    Container,
    InputBase,
    Button,
    Grid,
    Typography,
} from '@material-ui/core';

import Filter from '../filter/Filter';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    container: {
        justifyContent: 'space-between',
    },
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        marginBottom: '20px',
    },
    button: {
        marginLeft: '10px',
        padding: '0 45px',
    },
    typography: {
        marginBottom: '30px',
        marginTop: '20px',
    },
    inputBase: {
        color: stylesConstants.primaryWhite,
    },
});

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const dispatchSearch = () => {
        dispatch({
            type: 'SEARCH_VALUE',
            searchValue: searchInput.current.value || location.search.slice(1),
        });
        dispatch({
            type: 'MOVIES_FETCH',
        });
    };

    const searchInput = useRef();

    const { searchBy } = useSelector((state) => ({
        searchBy: state.movies.searchBy,
    }), shallowEqual);

    useEffect(() => {
        searchInput.current.value = location.search.slice(1);
        dispatchSearch();
    }, [location.search]);

    const changeSearchBy = (item) => {
        dispatch({
            type: 'SEARCH_BY',
            active: item,
        });
    };

    const handleClick = () => {
        history.push(`/search/?${searchInput.current.value}`);
        history.replace({ path: location.pathname, search: searchInput.current.value });
        dispatchSearch();
    };

    return (
        <Container className={classes.container}>
            <Typography
                className={classes.typography}
                variant="h4"
                component="h5"
            >
                Find your movie
            </Typography>

            <Grid className={classes.grid}>
                <InputBase
                    className={classes.inputBase}
                    inputRef={searchInput}
                />
                <Button
                    className={classes.button}
                    onClick={handleClick}
                >
                    Search
                </Button>
            </Grid>
            <Filter
                content="Search By"
                items={searchBy.values}
                actionFilter={changeSearchBy}
            />
        </Container>
    );
};

export default Search;
