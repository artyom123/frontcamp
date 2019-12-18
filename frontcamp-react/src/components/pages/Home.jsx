import React from 'react';
import {
    Grid,
} from '@material-ui/core';

import Main from '../main/Main';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import stylesConstants from '../../styles/constants.module.scss';

const Home = () => (
    <Grid>
        <Header/>
        <Main/>
        <Footer/>
    </Grid>
);

export default Home;
