import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fillTavern } from './../../../actions/brastlewarkActions'
import Tavern from './Tavern';

function mapStateToProps(state) {
    return {
        heroes: state.tavernState.heroes
    }
}


function mapDispatchToProps(dispatch) {
    return {
            ...bindActionCreators({
            fillTavern,
        }, dispatch)
    }
}

const HeroesContainer = connect(mapStateToProps, mapDispatchToProps)(Tavern);

export default HeroesContainer;
