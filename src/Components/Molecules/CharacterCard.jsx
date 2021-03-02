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
                <div className="character-card__image-container">
                    <Link to={this.props.link}>
                        <img src={this.props.image} alt={this.props.title} className="character-card__image"/>
                    </Link>
                </div>
                <div className="character-card__content-container">
                    <h2 className="character-card__title h2-title">{this.props.title}</h2>

                </div>
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