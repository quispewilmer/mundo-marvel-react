import React from 'react';
import MainInput from '../Atoms/MainInput'; 
import MainButton from '../Atoms/MainButton';

const MemberShipForm = () => {
    return (
        <form className="membership-form">
            <MainInput theme="dark" text="Put your email" label="Your email:" type="email"/>
            <MainButton button={true} text="Send" classes="main-footer__button membership-button"/>
        </form>
    );
}

export default MemberShipForm;