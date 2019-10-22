import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import { throttle } from 'throttle-debounce';


export default class Tavern extends Component {
    static propTypes = {
      heroes: PropTypes.array.isRequired,
      heroIndex: PropTypes.number.isRequired,
      fillTavern: PropTypes.func.isRequired,
      drinksOnMe: PropTypes.func.isRequired,
      findHeros: PropTypes.func.isRequired,
      query: PropTypes.string,
    };

    componentDidMount() {
      const { fillTavern, drinksOnMe } = this.props;
      fillTavern();
      window.addEventListener('wheel', throttle(100, drinksOnMe))
    }

    componentWillUnmount() {
      const { drinksOnMe } = this.props;
      window.removeEventListener('wheel', drinksOnMe);
    }

    render() {
        return (
          <div className="tavern">
            <div className="jumbotron bratelwark-sign">
                <h1 className="display-6">Welcome to Bratlewark!</h1>
                <input type="text" className="search" value={this.props.query} placeholder="search..." onChange={(e) => { this.filterHeroes(e) }} />
            </div>                   
            {this.renderHeroes()}
          </div>
        );
    }

    filterHeroes(e) {
      const { findHeros } = this.props;
      findHeros(e.target.value);
    }

    renderHeroes() {
      const { heroes, heroIndex, findHeros } = this.props;
      const currentHeroes = [...Array(10).keys()]
        .filter(e => heroes[e + heroIndex])
        .map(e => heroes[e + heroIndex]);

        [...Array(10).keys()]
        .filter(e => heroes[e + (heroIndex * 2)])
        .forEach((e) => {
          const img = new Image();
          const hero = heroes[e + (heroIndex * 2)];
          img.src = hero.thumbnail.replace('http:', 'https:');
        })
      return currentHeroes.map(hero => (
        <Hero findHeros={findHeros} hero={hero} key={hero.id}></Hero>)
      );
    }
}


