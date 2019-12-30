import React from 'react';
import {
    makeStyles,
    Container,
    Grid,
} from '@material-ui/core';

import EmptyList from '../empty/EmptyList';
import FilmBlock from '../../header/filmInfo/FilmBlock';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    gridFilms: {
        backgroundColor: stylesConstants.secondaryDarkGray,
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    containerFilms: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});

const FilmsContainer = ({items}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.gridFilms}>
            <Container className={classes.containerFilms}>
                {
                    !items.length
                    ? (
                        <EmptyList content="No Films Found"/>
                    ) : (
                        items.map((item) => <FilmBlock key={item.id} instance={item}/>)
                    )
                }
            </Container>
        </Grid>
    );
};
  
export default FilmsContainer;
