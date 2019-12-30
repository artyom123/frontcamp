import movie from '../movie';

const initialState = {
    item: null,
    relatedMovies: {
        criteria: 'genres',
        items: [],
    },
};

describe('movie reducer', () => {
    it('SET_MOVIE action', () => {
        const item = 'someValue';
        const action = {
            type: 'SET_MOVIE',
            item,
        };
        const result = movie(initialState, action);

        expect(result).toEqual({
            ...initialState,
            item,
        });
    });

    it('SET_RELATED_MOVIES action', () => {
        const items = [];
        const action = {
            type: 'SET_RELATED_MOVIES',
            items,
        };
        const result = movie(initialState, action);

        expect(result).toEqual({
            ...initialState,
            relatedMovies: {
                ...initialState.relatedMovies,
                items,
            },
        });
    });
});
