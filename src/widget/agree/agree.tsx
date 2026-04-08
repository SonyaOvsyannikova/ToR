import React from 'react';
import cl from './agree.module.css'

type AgreeProps = {
    isChecked?: boolean
    hasError?: boolean,
    onCheckChange: () => void,
}

const Agree = (props: AgreeProps) => {

    const {
        isChecked,
        onCheckChange,
        hasError } = props
    return (
        <div className={cl.agreeContent}>
            <label className={`${cl.checkboxContainer} ${hasError ? cl.checkboxError : ''}`}>
                <input
                    id={'agree'}
                    className={cl.checkBox}
                    type={'checkbox'}
                    checked={isChecked}
                    onChange={onCheckChange}
                />
                <span className={cl.customCheckbox}></span>
            </label>
            <p className={cl.agreeDesc}>
                Я согласен с <a className={cl.agreeLink}> офертой рекуррентных платежей </a>
                и <a className={cl.agreeLink}> Политикой конфиденциальности </a>
            </p>
        </div>
    );
};

export default Agree;