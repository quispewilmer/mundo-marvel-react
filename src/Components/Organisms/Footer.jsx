import React from 'react';
import Navigation from '../Molecules/Navigation';
import MemberShipForm from '../Molecules/MemberShipForm';

const Footer = () => {
    return (
        <footer class="main-footer">
            <div className="main-container main-container__footer">
                <div className="main-footer__item widget">
                    <h1 className="main-footer__title">About us</h1>
                    <p className="main-footer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptatibus fuga vitae qui earum, quidem voluptate mollitia iure error esse fugit excepturi quod. Perspiciatis dicta amet obcaecati quidem excepturi!</p>
                </div>
                <div className="main-footer__item widget">
                    <h1 className="main-footer__title">Navigation</h1>
                    <Navigation componentClass="main-footer" />
                </div>
                <div className="main-footer__item widget">
                    <h1 className="main-footer__title">Get a membership</h1>
                    <MemberShipForm />
                </div>
            </div>
        </footer>
    );
}

export default Footer;