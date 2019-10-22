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
      }),
      findHeros: PropTypes.func.isRequired,
    };

    goToHeroCard() {

    }

    renderFriendLinks(friends) {
      const { findHeros } = this.props;
      if(!friends) return ('');
      const friendLinks = friends.map((friend) => {
        return (<span className="friend-link" onClick={() => { findHeros(friend); }}> {friend}, </span>);
      });
      return friendLinks;
    }

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
                <ul className="col-12 row">
                  <li className="col-6"><span><small>Age:</small> <small>{hero.age}</small></span></li>
                  <li className="col-6"><span><small>Hair:</small> <small>{hero.hair_color}</small></span></li>
                  <li className="col-6"><span><small>Weight:</small> <small>{parseFloat(hero.weight).toFixed(2)}</small></span></li>
                  <li className="col-6"><span><small>Height:</small> <small>{parseFloat(hero.height).toFixed(2)}</small></span></li>                  
                  <li className="professions col-12"><small>Professions:</small> <small>{hero.professions.join(', ')}</small></li>
                  <li className="friends col-12">
                    <small>Friends:</small>
                    <small>{this.renderFriendLinks(hero.friends)}</small>
                  </li>              
                </ul>
              </div>
              </label>
          </div>
        );
    };
}
