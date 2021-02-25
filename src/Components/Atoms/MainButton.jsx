import React from 'react';

const MainButton = ({button, text, classes, link}) => {
    if(button == true) {
        return (
            <button className={`${classes} main-button button`}>{text}</button>
        );
    } else {
        return (
            <a className={`${classes} main-button button`} href={link}>{text}</a>
        );
    }
}

export default MainButton;