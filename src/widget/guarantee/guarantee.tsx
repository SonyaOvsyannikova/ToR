import React from 'react';
import cl from './guarantee.module.css'

const Guarantee = () => {
    return (
        <div className={cl.guarantee}>
            <div className={cl.titleGuarantee}>
                <h3 className={cl.title}>гарантия возврата 30 дней</h3>
            </div>
            <p className={cl.guaranteeDesc}>
                Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели!
                Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.
            </p>
        </div>
    );
};

export default Guarantee;