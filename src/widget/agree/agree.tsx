import React from 'react';
import cl from './agree.module.css'

const Agree = () => {
    return (
        <div className={cl.agreeContent}>
                <label className={cl.checkboxContainer}>
                    <input
                        id={'agree'}
                        className={cl.checkBox}
                        type={'checkbox'}
                    />
                    <span className={cl.customCheckbox}></span>
                </label>
            <p className={cl.agreeDesc}>Я согласен с <a className={cl.agreeLink}> офертой рекуррентных платежей </a> и <a className={cl.agreeLink}> Политикой конфиденциальности </a> </p>
        </div>
    );
};

export default Agree;