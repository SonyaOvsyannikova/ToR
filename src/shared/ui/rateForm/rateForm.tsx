'use client'
import { useState } from 'react';
import Rate from "@/shared/ui/rate";
import ComparisonBanner from "@/shared/ui/comparison-banner/comparison-banner";
import Agree from "@/widget/agree";
import BuyProduct from "@/widget/buy-product";
import cl from './rateForm.module.css'


const RateForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckboxError, setIsCheckboxError] = useState(false);

    const handleCheckChange = () => {
        setIsChecked(!isChecked);
        if (isCheckboxError) {
            setIsCheckboxError(false);
        }
    };

    const handleBuyClick = () => {
        if (isChecked) {
            console.log('Куплено!');

        } else {
            setIsCheckboxError(true);
        }
    };

    return (
        <form className={cl.rateForm}>
            <Rate />
            <ComparisonBanner />
            <Agree
                isChecked={isChecked}
                onCheckChange={handleCheckChange}
                hasError={isCheckboxError}
            />
            <BuyProduct onClick = {handleBuyClick}/>
        </form>
    );
};

export default RateForm;