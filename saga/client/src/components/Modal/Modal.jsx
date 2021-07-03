import React, { useState, useEffect, useContext, useRef } from 'react';
import propTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import ThemeContext from '../../context';
import './Modal.scss';

const Modal = ({ postMovies, onButtonClick, title: propsTitle, myClassName: propsShow }) => {
    const [state, setState] = useState({
        title: '',
        cover: '',
        description: '',
        show: false,
        inputs: [
            { placeholder: 'enter title here', name: 'title' },
            { placeholder: 'enter cover here', name: 'cover' },
            { placeholder: 'enter description here', name: 'description' }
        ],
    });
    const inputRef = useRef([]);

    useEffect(() => {
        setState({ ...state, show: propsShow });
        setTimeout(() => {
            if (propsShow && inputRef.current[0]) {
                inputRef.current[0].focus();
            }
        })
    }, [propsShow]);

    const context = useContext(ThemeContext);
    const handleOnChange = (e) => setState({ ...state, [`${e.target.name}`]: e.target.value });
    const handleClean = () => setState({ ...state, title: '', cover: '', description: '' })
    const handleAddMovie = () => {
        const { title, cover, description } = state;
        const object = { title, cover, description };
        postMovies(object);
        onButtonClick();
        handleClean();
    }
    const handleBtnHeaderClick = (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('close-button')) {    
            onButtonClick();
            handleClean();
        }
    }
    return (
        <div className={state.show ? `modal theme-${context.value}` : 'modal hide'} onClick={handleBtnHeaderClick}>
            <div className="modal__content" >
                <div className="content__header">
                    <h3>{propsTitle}</h3>
                    <Button title="X" clsNm="close-button" onButtonClick={handleBtnHeaderClick} />
                </div>
                <div className="content__body">
                    {state.inputs.map((input, idx) => (
                        <Input
                            key={input.name}
                            name={input.name}
                            value={state[input.name]}
                            placeholder={input.placeholder}
                            onChangeInput={handleOnChange}
                            ref={el => inputRef.current[idx] = el}
                        />
                    ))}
                    <Button
                        title="Add movie"
                        clsNm="movie__add"
                        disabled={!state.cover || !state.description || !state.title}
                        onButtonClick={handleAddMovie}
                    />
                </div>
            </div>
        </div>
    );
}
Modal.propTypes = {
    myClassName: propTypes.bool,
    onButtonClick: propTypes.func,
    title: propTypes.string,
    postMovies: propTypes.func,
};
export default Modal;