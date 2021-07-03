import React, { useState } from 'react';

import Button from '../Button';
import Modal from '../Modal';
import Radio from '../Radio';

import './Header.scss';

const Header = () => {
    const [modalState, setModalState] = useState(false);
    const handleBtnClick = () => setModalState(!modalState);

    return (
        <header className="header">
            <h1>Movies</h1>
            <div className="radio">
                <Radio/>
            </div>
            <Button onButtonClick={handleBtnClick} title="add movie" />
            <Modal myClassName={modalState} onButtonClick={handleBtnClick} title='add new film' />
        </header>

    );
}

export default Header;
