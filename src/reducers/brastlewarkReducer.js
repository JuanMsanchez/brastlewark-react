const defaultState = {
    heroes: []
};

export const tavernState = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_HEROES':
            return {
                ...state,
                heroes: action.heroes
            };
        default:
            return state
    }
};
