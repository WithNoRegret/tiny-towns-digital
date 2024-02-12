import React, { useState } from 'react';
import './AppHeader.css'
import logo from '../../../assets/logo.png'

const AppHeader = () => {

    return (
        <div className='header'>
            <div className='header__inner'>
                <img
                    src={logo}
                    alt="Логотип"
                    className='header__logo'
                />
                <h1 className='header__title'>Tiny Towns</h1>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <a href="" className="header__menu-link">Новая Игра</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="./pages/rules/rules.html" className="header__menu-link">Правила</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AppHeader;