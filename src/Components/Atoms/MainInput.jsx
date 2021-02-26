import React from 'react';

const MainInput = ({theme, text, label, type}) => { 
    return (
        <label>{label}<br></br>
            <input type={type} placeholder={text} className={`form-element input main-input ${theme == "dark" ? "main-input--dark" : "main-input--light"}`}/>
        </label>
    );
}

export default MainInput;