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

export const filterHeroes = (heroes) => {
    return {
        type: 'FILTER_HEROES',
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

export function drinksOnMe(event) {
    return function(dispatch, getState) {
        let newIndex = 0;
        const { heroIndex } = getState().tavernState;
        if (event.deltaY > 0) {
            newIndex = heroIndex + 1;
        }
        if (event.deltaY < 0) {
            newIndex = heroIndex - 1;
        }
        return dispatch(scrollHeroes(Math.max(newIndex, 0)))
    }
};

export function findHeros(event) {
    return function(dispatch, getState) {
        const { fullHeroesList } = getState().tavernState;
        const query = event.target.value;
        const words = query.toLowerCase().split(' ')
        const filteredList = fullHeroesList.filter((h) => {
            const match = words.reduce((match, word) => {
                return (match && h.name.toLowerCase().includes(word));
            }, true)
            return match;
        }).sort((h) => {
            let score = 0;
            if (h.name.split(' ')[0] === words[0]) score=+4;
            if (h.name.split(' ')[1] === words[1]) score=+3;
            if (h.name.split(' ')[0].includes(words[0])) score=+2;
            if (h.name.split(' ')[1].includes(words[1])) score=+1;
            return score;
        })
        return dispatch(filterHeroes(filteredList));
    }
};