import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navigation = () => {

    let pages = [
        "Home",
        "About",
        "Characters",
        "Contact"
    ]

    return (
        <nav className="main-header__navigator">
            <ul className="main-header__list">
                {pages.map((page) => {
                    if(page == "Home") {
                        return <li className="main-header__item"><Link to={`/`} exact className="main-header__link" activeClassName="active">Home</Link></li>
                    } else {
                        return <li className="main-header__item"><Link to={`/${page.toLowerCase()}`} className="main-header__link" activeClassName="active">{page}</Link></li>
                    }
                })}
            </ul>
        </nav>
    );
}

export default Navigation;