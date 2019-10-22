import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fillTavern, drinksOnMe, findHeros } from './../../../actions/brastlewarkActions'
import Tavern from './Tavern';

function mapStateToProps(state) {
    return {
        heroes: state.tavernState.heroes,
        heroIndex: state.tavernState.heroIndex,
        query: state.tavernState.query
    }
}


function mapDispatchToProps(dispatch) {
    return {
            ...bindActionCreators({
            fillTavern,
            drinksOnMe,
            findHeros,
        }, dispatch)
    }
}

const HeroesContainer = connect(mapStateToProps, mapDispatchToProps)(Tavern);

export default HeroesContainer;
