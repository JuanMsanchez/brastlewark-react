import { ApiClient } from './../utils/brastlewark-api-client';

export const loadHeroes = (heroes) => {
    return {
        type: 'LOAD_HEROES',
        heroes
    }
};

export const scrollHeroes = (heroIndex) => {
    return {
        type: 'SCROLL_HEROES',
        heroIndex
    }
};

const fetchHeroes = async (dispatch, getState) => {
    const brastlewarkClient = new ApiClient();
    try {
      const heroes = await brastlewarkClient.fetchHeroes();
      return dispatch(loadHeroes(heroes))
    } catch(e) {
       console.log(e);
      return;
    }   
};

export function fillTavern() {
    return function(dispatch, getState) {
        fetchHeroes(dispatch, getState)
    }
};

export function drinksOnMe(event) {
    return function(dispatch, getState) {
        let newIndex = 0;
        const { heroIndex } = getState().tavernState;
        if (event.deltaY > 0) {
            newIndex = heroIndex + 1;
            console.log('GOING UP', heroIndex, newIndex);
        }
        if (event.deltaY < 0) {
            newIndex = heroIndex - 1;
            console.log('GOING DOWN', heroIndex, newIndex);
        }
        return dispatch(scrollHeroes(Math.max(newIndex, 0)))
    }
};
