import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fillTavern, drinksOnMe } from './../../../actions/brastlewarkActions'
import Tavern from './Tavern';

function mapStateToProps(state) {
    return {
        heroes: state.tavernState.heroes,
        heroIndex: state.tavernState.heroIndex
    }
}


function mapDispatchToProps(dispatch) {
    return {
            ...bindActionCreators({
            fillTavern,
            drinksOnMe,
        }, dispatch)
    }
}

const HeroesContainer = connect(mapStateToProps, mapDispatchToProps)(Tavern);

export default HeroesContainer;
