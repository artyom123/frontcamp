import movies from '../movies';
import {
  setSearchValue,
  setSortBy,
  setMovies,
} from '../../action/movies';

const initialState = {
    searchBy: {
        values: [
            { title: 'title' },
            { genre: 'genre' },
        ],
        active: 'title',
    },
    searchValue: '',
    items: [],
    sortBy: {
        values: [
            {'release_date': 'release date'},
            {'vote_average': 'raiting'},
        ],
        active: 'vote_average',
    },
};

describe('movies reducer', () => {
    describe('SEARCH_VALUE action', () => {
        it('searchValue', () => {
            const searchValue = 'someValue';
            const action = setSearchValue(searchValue);
            const result = movies(initialState, action);

            expect(result).toEqual({
                ...initialState,
                searchValue,
            });
        });
    });

    describe('SORT_BY action', () => {
        it('sortBy', () => {
            const active = 'vote_average';
            const action = setSortBy(active);
            const result = movies(initialState, action);

            expect(result).toEqual({
                ...initialState,
                sortBy: {
                ...initialState.sortBy,
                active,
                },
            });
        });
    });

    describe('SET_MOVIES action', () => {
        it('items', () => {
            const items = [];
            const action = setMovies(items);
            const result = movies(initialState, action);

            expect(result).toEqual({
                ...initialState,
                items,
            });
        });
    });
});
