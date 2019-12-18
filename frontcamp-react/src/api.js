const FILMS_API = 'http://react-cdp-api.herokuapp.com';

async function getFilms({searchValue, searchBy, sortBy}) {
    const url = `${FILMS_API}/movies?sortBy=${sortBy.active}&sortOrder=desc&search=${searchValue}&searchBy=${searchBy.active}`;
    const { data } = await fetch(url)
        .then(response => response.json());

    return data;
}

async function getFilm(id) {
    const url = `${FILMS_API}/movies/${id}`;
    const data = await fetch(url)
        .then(response => response.json());
    
    return data;
}

async function getRelated(criteria, relatesTo) {
    const filterValue = relatesTo[criteria];
    const search = Array.isArray(filterValue) ? filterValue[0] : filterValue;
    const url =`${FILMS_API}/movies/?search=${search}&searchBy=${criteria}`;
    
    const { data } = await fetch(url)
        .then(response => response.json()) || [];

    return data.filter((item) => item.id !== relatesTo.id);
}

export {
    getFilm,
    getFilms,
    getRelated,
};
