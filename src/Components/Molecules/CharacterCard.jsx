import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="character-card">
                <Link to={this.props.link}>
                    <img src={this.props.image} alt={this.props.title} className="character-card__image"/>
                </Link>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
}

CharacterCard.defaultProps = {
    image: "https://cdn.browshot.com/static/images/not-found.png",
    title: "Not found"
}

export default CharacterCard;