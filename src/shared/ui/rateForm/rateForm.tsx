import React from 'react';
import Rate from "@/shared/ui/rate";
import ComparisonBanner from "@/shared/ui/comparison-banner/comparison-banner";
import Agree from "@/widget/agree";
import BuyProduct from "@/widget/buy-product";
import cl from './rateForm.module.css'
// flex flex-col gap-[20px]
const RateForm = () => {
    return (
        <form className={cl.rateForm}>
            <Rate />
            <ComparisonBanner />
            <Agree />
            <BuyProduct />
        </form>
    );
};

export default RateForm;