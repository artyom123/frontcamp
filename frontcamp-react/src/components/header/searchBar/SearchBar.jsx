import React from 'react';
import {
    makeStyles,
    Grid,
    InputBase,
    Button,
} from '@material-ui/core';

import Filter from '../filter/Filter';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    inputBase: {
        width: '100%',
        color: stylesConstants.primaryWhite,
        backgroundColor: stylesConstants.secondaryLightGray,
        padding: '2px 10px',
        borderRadius: '5px',
    },
    button: {
        width: '200px',
        color: stylesConstants.primaryWhite,
        backgroundColor: stylesConstants.primaryRed,
        marginLeft: '5px',
        '&:hover': {
            backgroundColor: stylesConstants.primaryRed,
        },
    },
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
    },
});

const SearchBar = () => {
    const classes = useStyles();

    const filter = {
        tabsInfo: "Search by",
        tabsList: ['title', 'gengre'],
    };

    return (
        <>
            <Grid className={classes.grid}>
                <InputBase
                    className={classes.inputBase}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Button className={classes.button}>
                    Search
                </Button>
            </Grid>
            <Filter
                key={filter.tabsInfo}
                tabsInfo={filter.tabsInfo}
                tabsList={filter.tabsList}
            />
        </>
    );
};

export default SearchBar;