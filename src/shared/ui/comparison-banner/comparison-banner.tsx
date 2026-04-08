import React from 'react';
import Alert from '@/assets/icons/alert.svg'
import cl from './comparison-banner.module.css'


const ComparisonBanner = () => {
    return (
        <div className={`
            flex gap-2 
            bg-[var(--color-banner-background)] 
            rounded-[var(--border-radius-banner)] 
            p-5 
            max-lg:p-[10px_12px]
            mt-[clamp(10px,0.78vw,20px)]
            gap-2
            max-lg:gap-1.5
        `}>
            <Alert className="w-[clamp(16px,1.04vw,24px)] h-auto flex-shrink-0" />
            <p className="text-[clamp(12px,1.04vw,16px)]">
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
            </p>
        </div>
    );
};

export default ComparisonBanner;