import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Main from '../main/Main';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Home = () => {
    const dispatch = useDispatch();
    const { films } = useSelector((state) => ({
        films: state.movies.items,
    }), shallowEqual);

    useEffect(() => {
        dispatch({ type: 'MOVIES_FETCH' });
    }, []);

    return (
        <Grid>
            <Header/>
            <Main films={films}/>
            <Footer/>
        </Grid>
    );
};

export default Home;
