import React from 'react';
import cl from './title.module.css'

const Title = () => {
    return (
        <h2 className={cl.title}> Выбери подходящий для себя
            <a href='#' className={cl.titleLink}> тариф</a>
        </h2>
    );
};

export default Title;