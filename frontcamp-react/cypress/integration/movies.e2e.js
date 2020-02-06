import movies from '../../src/reducer/movies';

const initialState = {
    searchBy: {
        values: [
            { title: 'title' },
            { genres: 'genre' },
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
    it('SEARCH_VALUE action', () => {
        const searchValue = 'someValue';
        const action = {
            type: 'SEARCH_VALUE',
            searchValue,
        };
        const result = movies(initialState, action);

        expect(result).to.eql({
            ...initialState,
            searchValue,
        });
    });

    it('SORT_BY action', () => {
        const active = 'vote_average';
        const action = {
            type: 'SORT_BY',
            active,
        };
        const result = movies(initialState, action);

        expect(result).to.eql({
            ...initialState,
            sortBy: {
                ...initialState.sortBy,
                active,
            },
        });
    });

    it('SET_MOVIES action', () => {
        const items = [];
        const action = {
            type: 'SET_MOVIES',
            items,
        };
        const result = movies(initialState, action);

        expect(result).to.eql({
            ...initialState,
            items,
        });
    });
});
