import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import createSagaMiddleware from '@redux-saga/core';
import { reducer } from './store/movies/reducer';
import { watcher } from './store/movies/saga';
import ThemeContext from './context';
import './index.scss';

const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMidleWare = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMidleWare), devTools));
sagaMidleWare.run(watcher);

function Main() {
    const [value, setValue] = useState('light');
    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{value, setValue}}>
                <App />
            </ThemeContext.Provider>
        </Provider>
    )
}

render(
    <Main/>, 
    document.getElementById('root')
);
