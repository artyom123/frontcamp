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

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    cardMedia: {
        width: '100%',
        height: '340px',
    },
    card: {
        width: '240px',
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
        marginLeft: '5px',
    },
    cardInfoGenre: {
        padding: '10px 0',
        fontSize: '12px',
    },
    cardInfoTitle: {
        fontSize: '16px',
    },
});

const FilmBlock = ({ instance }) => {
    const {
        id,
        poster_path,
        title,
        release_date,
        genres,
    } = instance;
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push(`/film/${id}`);
    };

    return (
        <Card
            className={classes.card}
            onClick={handleClick}
        >
            <CardActionArea>
                <CardMedia
                    className={classes.cardMedia}
                    image={poster_path}
                    title={title}
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
                            {release_date.slice(0, 4)}
                        </Typography>
                    </Grid>
                    <Typography
                        className={classes.cardInfoGenre}
                        variant="body2"
                        component="p"
                    >
                        {genres.join(', ')}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default FilmBlock;
