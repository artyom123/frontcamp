import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    makeStyles,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { head } from 'lodash';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    cardMedia: {
        width: '100%',
    },
    card: {
        width: '300px',
        margin: '35px 10px',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        boxShadow: 'none',
    },
    cardInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardInfoYear: {
        padding: '3px 7px',
        border: `1px solid ${stylesConstants.primaryWhite}`,
        borderRadius: '5px',
        fontSize: '10px',
    },
    cardInfoGenre: {
        padding: '10px 0',
        fontSize: '12px',
    },
    cardInfoTitle: {
        fontSize: '16px',
    },
});

const propTypes = {
    film: PropTypes.oneOfType([PropTypes.object]),
};
const defaultProps = {
    film: {},
};

const Film = ({film}) => {
    const history = useHistory();
    const classes = useStyles();
    const {
        title,
        year,
        genre,
        images,
    } = film;

    const handleClick = () => {
        const url = (title.toLowerCase()).replace(/\s/g, "_");

        history.push(`/film/${url}`);
    };

    return (
        <Card
            className={classes.card}
            onClick={handleClick}
        >
            <CardActionArea>
                <CardMedia
                    className={classes.cardMedia}
                    image={head(images)}
                    title={title}
                    height="140"
                    component="img"
                />
                <CardContent>
                    <Grid
                        className={classes.cardInfo}
                    >
                        <Typography
                            className={classes.cardInfoTitle}
                            variant="body2"
                            component="p"
                        >
                            {title}
                        </Typography>
                        <Typography
                            className={classes.cardInfoYear}
                            variant="body2"
                            component="p"
                        >
                            {year}
                        </Typography>
                    </Grid>
                    <Typography
                        className={classes.cardInfoGenre}
                        variant="body2"
                        component="p"
                    >
                        {genre}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

Film.propTypes = propTypes;
Film.defaultProps = defaultProps;

export default Film;
