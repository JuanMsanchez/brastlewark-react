const defaultState = {
    heroes: [],
    heroIndex: 0
};

export const tavernState = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_HEROES':
            return {
                ...state,
                heroes: action.heroes,
                fullHeroesList: action.heroes,
            };
        case 'FILTER_HEROES':
            return {
                ...state,
                heroes: action.heroes,
                heroIndex: 0,
            };            
        case 'SCROLL_HEROES':
            return {
                ...state,
                heroIndex: action.heroIndex
            };            
        default:
            return state
    }
};
