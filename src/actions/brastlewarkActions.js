import { ApiClient } from './../utils/brastlewark-api-client';

export const loadHeroes = (heroes) => {
    return {
        type: 'LOAD_HEROES',
        heroes
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
