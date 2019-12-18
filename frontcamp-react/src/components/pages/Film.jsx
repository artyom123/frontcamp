import React from 'react';
import {connect} from 'react-redux';

import Footer from '../footer/Footer';
import FilmInfo from '../header/filmInfo/FilmInfo';
import RelatedFilms from '../main/RelatedFilms';

const Film = (props) => {
    const relatedMovies = props.relatedMovies;
    const film = props.movie;
    const criteria = props.criteria;
    const { id } = props.match.params;

    console.log('id',props)

    if ((String(film.id) !== id) || !film) {
        props.getFilm(id);
    }

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

function mapStateToProps ({movie}){
    return {
        movie: movie.item,
        relatedMovies: movie.relatedMovies.items,
        criteria: movie.relatedMovies.criteria,
    };
}

function mapDispatchToProps (dispatch){
    return {
        getFilm: (id) => {
            dispatch({
                type: 'MOVIE_FETCH',
                id: id,
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);
