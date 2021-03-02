import React from 'react';
import CharacterPage from './CharacterPage';

const CharacterTemplate = ({character}) => {
    return (
        <div className="character-page-container">
            <div className="character-container__image">
                <img src={`${character ? character.thumbnail.path : "a"}.${character ? character.thumbnail.extension : "jpg"}`} alt=""/>
            </div>
            <div className="character-container__content">
                <h1 className="character-container__title">Description</h1>
                <p className="character-container__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, ratione quia? Provident, necessitatibus aspernatur? Saepe voluptatum esse sit ipsam, pariatur natus vel neque maiores veniam vero numquam, et, minima corrupti.</p>
            </div>
        </div>
    )
}

export default CharacterTemplate;