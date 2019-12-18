import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import EmptyList from '../empty/EmptyList';
import FilmBlock from '../../header/filmInfo/FilmBlock';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    gridFilms: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: stylesConstants.secondaryDarkGray,
        paddingTop: '20px',
        paddingBottom: '20px',
    },
});

const FilmsContainer = ({items}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.gridFilms}>
            {
                !items.length
                ? (
                    <EmptyList content="No Films Found"/>
                ) : (
                    items.map((item) => <FilmBlock key={item.id} instance={item}/>)
                )
            }
        </Grid>
    );
};
  
export default FilmsContainer;
