import React from 'react';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { head } from 'lodash';

const propTypes = {
    film: PropTypes.oneOfType([PropTypes.object]),
};
const defaultProps = {
    film: {},
};

const FilmInfo = ({film}) => {
    const {
        title,
        year,
        runtime,
        genre,
        plot,
        imdbRating,
        images,
    } = film;

    return (
        <>
            <Grid>
                <img src={head(images)} alt={title}/>
            </Grid>
            <Grid>
                <Grid>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {imdbRating}
                    </Typography>
                </Grid>
                <Typography variant="body2" component="p">
                    {genre}
                </Typography>
                <Grid>
                    <Grid>
                        <Typography variant="body2" component="p">
                            {year}
                        </Typography>
                        year
                    </Grid>
                    <Grid>
                        <Typography variant="body2" component="p">
                            {runtime}
                        </Typography>
                        min
                    </Grid>
                </Grid>
                <Typography variant="body2" component="p">
                    {plot}
                </Typography>
            </Grid>
        </>
    );
};

FilmInfo.propTypes = propTypes;
FilmInfo.defaultProps = defaultProps;

export default FilmInfo;
