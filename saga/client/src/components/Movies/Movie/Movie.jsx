import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Cover from './Cover';
import Description from './Description';
import ThemeContext from '../../../context';
import './Movie.scss';

const Movie = ({ id }) => {
    const context = useContext(ThemeContext);
    return (
        <div className={`movie theme-${context.value}`} >
            <Title name='title' id={id} />
            <Cover name="cover" id={id} />
            <Description name="description" id={id} />
        </div>
    );
}
Movie.propTypes = {
    id: PropTypes.string.isRequired
};

export default React.memo(Movie);
