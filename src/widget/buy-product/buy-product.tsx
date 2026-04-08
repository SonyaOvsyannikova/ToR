'use client'
import React from 'react';
import MainButton from "@/shared/ui/main-button";
import cl from './buy-product.module.css'
type BuyProductProps = {
    onClick?: () => void;
}
const BuyProduct = (props: BuyProductProps) => {
    const { onClick } = props
    return (
        <div>
            <MainButton label={'Купить'} type={'button'} onClick={onClick}/>
            <div>
                <p className={cl.buyDesc}>Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
                    денежных средств для получения пожизненного доступа к приложению.
                    Пользователь соглашается,
                    что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг
                    сервиса в случае желания пользователя.</p>
            </div>
        </div>
    );
};

export default BuyProduct;