import React from 'react';
import {connect} from 'react-redux';
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
    },
    button: {
        marginLeft: '10px',
        padding: '0 45px',
    },
    typography: {
        marginBottom: '30px',
        marginTop: '20px',
    },
});

const Search = (props) => {
    let search = '';
    const classes = useStyles();

    const handleChange = ({target}) => {
        search = target.value;
    };

    const handleClick = () => {
        props.setSearchValue(search);
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
                <InputBase onChange={handleChange}/>
                <Button
                    className={classes.button}
                    onClick={handleClick}
                >
                    Search
                </Button>
            </Grid>
            <Filter
                content="Search By"
                value={props.active}
                items={props.values}
                setActive={props.setSearchFilter}
            />
        </Container>
    );
};

function mapStateToProps ({ movies }) {
    const { searchBy } = movies;

    return {
        active: searchBy.active,
        values: searchBy.values,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        setSearchValue: (value) => {
            dispatch({
                type: 'SEARCH_VALUE',
                searchValue: value,
            });
            dispatch({
                type: 'MOVIES_FETCH',
            });
        },
        setSearchFilter: (value) => {
            dispatch({
                type: 'SEARCH_BY',
                active: value,
            });
            dispatch({
                type: 'MOVIES_FETCH',
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
