function fetchMovies() {
    return {
        type: 'MOVIES_FETCH',
    };
}

function setMovies(value) {
    return {
        type: 'SET_MOVIES',
        items: value,
    };
}

function setSearchValue(value) {
    return {
        type: 'SEARCH_VALUE',
        searchValue: value,
    };
}

function setSortBy(value) {
    return {
        type: 'SORT_BY',
        active: value,
    };
}

function setSearchBy(value) {
    return {
        type: 'SEARCH_BY',
        active: value,
    };
}

export {
    fetchMovies,
    setMovies,
    setSearchValue,
    setSortBy,
    setSearchBy,
};