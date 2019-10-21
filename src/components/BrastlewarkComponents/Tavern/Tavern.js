import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';

export default class Tavern extends Component {
    static propTypes = {
      heroes: PropTypes.array.isRequired,
      heroIndex: PropTypes.number.isRequired,
      fillTavern: PropTypes.func.isRequired,
      drinksOnMe: PropTypes.func.isRequired,
    };

    componentDidMount() {
      const { fillTavern, drinksOnMe } = this.props;
      fillTavern();
      window.addEventListener('wheel', drinksOnMe);
    }

    componentWillUnmount() {
      const { drinksOnMe } = this.props;
      window.removeEventListener('wheel', drinksOnMe);
    }

    render() {
        return (
          <div>
            {this.renderHeroes()}
          </div>
        );
    };

    renderHeroes() {
      const { heroes, heroIndex } = this.props;
      const currentHeroes = [...Array(10).keys()]
        .filter(e => heroes[e + heroIndex])
        .map(e => heroes[e + heroIndex]);
      return currentHeroes.map(hero => (<Hero hero={hero} key={hero.id}></Hero>));
    }
}


