import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Footer from '../footer/Footer';
import FilmInfo from '../header/filmInfo/FilmInfo';
import RelatedFilms from '../main/RelatedFilms';

const Film = ({match}) => {
    const { id } = match.params;
    const dispatch = useDispatch();

    const { film, relatedMovies, criteria } = useSelector((state) => ({
        film: state.movie.item,
        relatedMovies: state.movie.relatedMovies.items,
        criteria: state.movie.relatedMovies.criteria,
    }), shallowEqual);

    useEffect(() => {
        dispatch({
            type: 'MOVIE_FETCH',
            id: id,
        });
    }, [id]);

    return (
        <>
            {
                film && <FilmInfo film={film}/>
            }
            {
                film && (
                <RelatedFilms
                    criteriaValue={
                        Array.isArray(film[criteria])
                        ? film[criteria][0]
                        : film[criteria]
                    }
                    items={relatedMovies}
                />
                )
            }
            <Footer/>
        </>
    );
};

export default Film;
