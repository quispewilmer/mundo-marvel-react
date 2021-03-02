import React from 'react';
import axios from 'axios';
import CharacterTemplate from './CharacterTemplate';

class CharacterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
        }
    }

    componentDidMount() {
        fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=60&apikey=a54e9d1ed7b3e1b43f1a69cffa56e75a&hash=394a7fb3ae9d2d6af7b66fc7d7a72ef8")
        .then(response => response.json())
        .then(data => {
            this.setState({
                characters: data.data.results,
            });
        });
    }
    
    render() {
        const characters = this.state.characters;

        return (
            <div className="main-container">
                <CharacterTemplate character={
                    characters.filter(
                        character => 
                        character.id == this.props.match.params.id)[0]
                } />
            </div>
        );
    }
}

export default CharacterPage;