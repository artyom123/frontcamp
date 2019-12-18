import movie from '../movie';
import {
  setMovie,
} from '../../action/movie';


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

describe('movie reducer', () => {
    describe('SET_MOVIE action', () => {
        it('item', () => {
            const item = 'someValue';
            const action = setMovie(item);
            const result = movie(initialState, action);

            expect(result).toEqual({
                ...initialState,
                item,
            });
        });
    });
});
