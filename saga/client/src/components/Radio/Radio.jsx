import React, { useContext } from 'react';
import ThemeContext from '../../context';

import './Radio.scss';

const Radio = () => {
    const context = useContext(ThemeContext);

    function handleChange (e) {
        const checked = e.target.checked;
        context.setValue(checked ? 'dark' : 'light');
    }

    return (
        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch">
            <input 
                type="checkbox" id="switch" className="mdl-switch__input" value={context.value} onChange={handleChange}
            />
            <span className="mdl-switch__label"></span>
        </label>
    )
}
export default Radio;
