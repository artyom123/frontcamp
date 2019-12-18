import React from 'react';
import {
    makeStyles,
    Container,
    Grid,
    Typography,
    Link,
} from '@material-ui/core';

import Footer from '../footer/Footer';

const NotFound = () => (
    <Container>
        <Grid>
            <Typography variant="h1" component="h2" gutterBottom>
                Page not found
            </Typography>
            <Link href="/">
                Go to main page
            </Link>
        </Grid>
        <Footer/>
    </Container>
);

export default NotFound;
