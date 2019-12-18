function fetchMovie(value) {
    return {
        type: 'MOVIE_FETCH',
        id: value,
    };
}

function setMovie(value) {
    return {
        type: 'SET_MOVIE',
        item: value,
    };
}

function setRelatedMovies(value) {
    return {
        type: 'SET_RELATED_MOVIES',
        items: value,
    };
}

export {
    fetchMovie,
    setMovie,
    setRelatedMovies,
};
