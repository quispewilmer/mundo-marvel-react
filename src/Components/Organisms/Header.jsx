import React from 'react';
import Navigation from '../Molecules/Navigation';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="main-header">
            <div className="main-container main-container__header">
                <div className="main-header__logo-container">
                    <Link to="/" exact className="main-header__logo__link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg" alt="Marvel's logo" className="main-header__logo logo" />
                    </Link>
                </div>
                <Navigation componentClass="main-header"/>
            </div>
        </header>
    );
}

export default Header;