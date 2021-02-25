import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navigation = ({componentClass}) => {

    let pages = [
        "Home",
        "About",
        "Characters",
        "Contact"
    ]

    return (
        <nav className={`${componentClass}__navigator list-nav`}>
            <ul className={`${componentClass}__list list-ul`}>
                {pages.map((page) => {
                    if(page == "Home") {
                        return <li className={`${componentClass}__item list-item`}><Link to={`/`} exact className={`${componentClass}__link list-link`} activeClassName="active">Home</Link></li>
                    } else {
                        return <li className={`${componentClass}__item`}><Link to={`/${page.toLowerCase()}`} className={`${componentClass}__link`} activeClassName="active">{page}</Link></li>
                    }
                })}
            </ul>
        </nav>
    );
}

export default Navigation;