import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';


export default class Hero extends Component {
    static propTypes = {
      hero: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        hair_color: PropTypes.string.isRequired,
        professions: PropTypes.array.isRequired,
        friends: PropTypes.array.isRequired,
        test: PropTypes.string,
      })
    };

    render() {
        const { hero } = this.props;
        return (
          <div className="">
              <label htmlFor={hero.id} className="hero-card row">
              <p className="col-8">
              {hero.name.split(' ')[0]} <br/>
              <small>{hero.name.split(' ').slice(1).join(' ')}</small>
              </p>
              
              <LazyLoad className="col-4" height={50}>
                  <img src={hero.thumbnail.replace('http:', 'https:')} alt='avatar' className="avatar"></img>
              </LazyLoad>
              
              <input id={hero.id} className="toggle" type="checkbox"/>

              <div className="details-list col-12 row collapsible-content">
                <ul className="col-6">
                  <li><span><b>age:</b> {hero.age}</span></li>
                  <li><span><b>hair color:</b> {hero.hair_color}</span></li>
                </ul>
                <ul className="col-6">
                  <li><span><b>weight:</b> {hero.weight}</span></li>
                  <li><span><b>height:</b> {hero.height}</span></li>
                </ul>
                <p className="col-12"><b>professions:</b> {hero.professions.join()}</p><br/>              
                <p className="col-12"><b>friends:</b> {hero.friends.join()}</p>              
              </div>
              </label>
          </div>
        );
    };
}
