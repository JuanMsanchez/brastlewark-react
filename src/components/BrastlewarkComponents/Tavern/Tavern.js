import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';

export default class Tavern extends Component {
    static propTypes = {
      heroes: PropTypes.array.isRequired,
      fillTavern: PropTypes.func.isRequired,
    };

    componentDidMount() {
      const { fillTavern } = this.props;
      fillTavern();
    }

    render() {
        return (
          <div>
            {this.fillTavern()}
          </div>
        );
    };

    fillTavern() {
      const { heroes } = this.props;
      return heroes.map(hero => (<Hero hero={hero} key={hero.id}></Hero>));
    }
}
