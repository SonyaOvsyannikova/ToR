import React from 'react';
import human from '@/assets/images/human.png'
import Image from 'next/image';
import cl from './subscription-plans.module.css'
import Rate from "@/shared/ui/rate";
import RateForm from "@/shared/ui/rateForm/rateForm";


const SubscriptionPlans = () => {
    return (
        <div className="flex flex-col xl:flex-row xl:gap-[88px] items-center w-full max-w-7xl">
            <div className={cl.humanGradient}>
                <Image src={human} alt="sport-human" className={cl.human} />
            </div>
            <RateForm />
        </div>
    );
};

export default SubscriptionPlans;