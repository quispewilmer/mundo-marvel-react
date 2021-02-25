import React from 'react';

const MemberShipForm = () => {
    return (
        <form className="membership-form">
            <label htmlFor="email">Email:
                <MainInput theme="dark" text="Put your email" />
            </label>
            
        </form>
    );
}

export default MemberShipForm;