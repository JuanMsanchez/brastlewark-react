import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Hero extends Component {
    static propTypes = {
      cell: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        hair_color: PropTypes.string.isRequired,
        professions: PropTypes.array.isRequired,
        friends: PropTypes.array.isRequired
      }),      
    };

    render() {
        const { hero } = this.props;
        return (
          <div>
              <p>{hero.name}</p>
          </div>
        );
    };
}
