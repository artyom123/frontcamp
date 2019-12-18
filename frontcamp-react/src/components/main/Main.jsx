import React from 'react';
import {connect} from 'react-redux';
import {
    makeStyles,
    Grid,
} from '@material-ui/core';

import FilmsContainer from './film/FilmsContainer';
import FilmsHeader from './count/FilmsHeader';

const Main = (props) => {

    return (
        <Grid>
            <Grid>
                <FilmsHeader count={props.items.length}/>
            </Grid>
            <Grid>
                <FilmsContainer items={props.items}/>
            </Grid>
        </Grid>
    );
};

function mapStateToProps (state){
    return {
        items: state.movies.items,
    };
};

export default connect(mapStateToProps)(Main);
