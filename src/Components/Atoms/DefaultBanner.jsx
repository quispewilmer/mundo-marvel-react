import React from 'react';

const DefaultBanner = ({title, description}) => {
    return (
        <div className="main-default-banner">
            <div className="main-container main-container-default-banner">
                <h1 className="main-default-banner__title">{title}</h1>
                <span className="main-default-banner__description">{description}</span>
            </div>
        </div>
    );
}

export default DefaultBanner;