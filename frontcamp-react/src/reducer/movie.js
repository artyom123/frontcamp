export default function movie(state = {}, action) {
    const newState = { ...state };
  
    switch (action.type) {
        case 'SET_MOVIE':
            newState.item = action.item;
            return newState;
        case 'SET_RELATED_MOVIES':
            newState.relatedMovies.items = action.items;
            return newState;
        default:
            return newState;
    }
};
