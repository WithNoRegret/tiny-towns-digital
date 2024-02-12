import React, { useState } from 'react';
import '../../../styles/main.css'

const AppHeader = () => {

    return (
        <div className='header'>
            <div className='header__inner'>
                <div className="header__title-container">
                    <h1 className='header__title untargetable'>Tiny Towns</h1>
                </div>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item button">
                            <a href="/pages/play/play.html" className="header__menu-link">Новая Игра</a>
                        </li>
                        <li className="header__menu-item button">
                            <a href="/pages/rules/rules.html" className="header__menu-link">Правила</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AppHeader;