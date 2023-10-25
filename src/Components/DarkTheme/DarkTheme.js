import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './DarkTheme.css'

const DarkTheme = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };
    
    return (
        <div className="btn-dark-theme">
        <input
            type="checkbox"
            className="checkbox"
            id="chk"
            onChange={toggleTheme}
            
        />
        <label className="label" htmlFor="chk">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
            <div className="ball"></div>
        </label>
    </div>
    )
};

export default DarkTheme;
