import React, { useContext } from 'react';
import { NotificationContainer } from 'react-notifications';

import Header from '../Header';
import Movies from '../Movies';
import ThemeContext from '../../context';

import './App.scss';
import 'react-notifications/lib/notifications.css';

const App = () => {
    const context = useContext(ThemeContext);

    return (
        <div className={`app theme-${context.value}`}>
            <Header />
            <Movies />
            <NotificationContainer />
        </div>
    );
}

export default App;
