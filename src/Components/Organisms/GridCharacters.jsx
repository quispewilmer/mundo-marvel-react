import React from 'react';
import CharacterCard from '../Molecules/CharacterCard';

class GridCharacters extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
        };
    }
    
    componentDidMount() {
        fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=60&apikey=a54e9d1ed7b3e1b43f1a69cffa56e75a&hash=394a7fb3ae9d2d6af7b66fc7d7a72ef8")
        .then(response => response.json())
        .then(data => {
            this.setState({
                characters: data.data.results
            });
        });
    }

    render() {
        return (
            <div className="main-container">
                <div className="grid-characters-container">
                    {this.state.characters.map((character) => {
                        return <CharacterCard key={character.id} title={character.name} image={`${character.thumbnail.path}/standard_fantastic.jpg`} link={`/characters/${character.id}`}/>
                    })}
                </div>
            </div>
        );
    }
}

export default GridCharacters;