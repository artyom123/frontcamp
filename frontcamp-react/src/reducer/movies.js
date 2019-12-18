export default function movies(state = {}, action) {
    const newState = { ...state };

    switch (action.type) {
        case 'SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.searchValue,
            }
        case 'SORT_BY':
            const newActiveSort = action.active;

            if (newState.sortBy.values.includes(newActiveSort)) {
                newState.sortBy.active = newActiveSort;
            }

            return newState;
        case 'SEARCH_BY':
            const newActiveSearchBy = action.active;

            if (newState.searchBy.values.includes(newActiveSearchBy)) {
                newState.searchBy.active = newActiveSearchBy;
            }

            return newState;
        case 'MOVIES_FETCH_SUCCEEDED':
            newState.items = action.items;
            return newState;
        default:
            return newState;
    }
};
