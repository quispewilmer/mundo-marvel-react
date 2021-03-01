import React from 'react';

class CharacterPage extends React.Component {
    constructor(match) {
        this.match = match;
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
            <h1>{match.params.id}</h1>
        );
    }
}

export default CharacterPage;