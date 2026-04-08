import React from 'react';
import RateCard from "@/shared/ui/rateCard/rateCard";
import cl from './rate.module.css'
import ComparisonBanner from "@/shared/ui/comparison-banner/comparison-banner";

type rateList = {
    id: number;
    title: string;
    priceNew: number;
    priceOld: number;
    description: string;
    descriptionMobile?: string;
    discount: string;
    isHit: boolean;
}

const Rate = () => {

    const rateLists: rateList[] = [
        {
            id: 1,
            title: 'Навсегда',
            priceNew: 5990,
            priceOld: 18990,
            description: 'Для тех, кто хочет всегда быть в форме и поддерживать здоровье',
            descriptionMobile: 'Всегда быть в форме',
            discount: '-70%',
            isHit: true,
        },
        {
            id: 2,
            title: '3 месяца',
            priceNew: 1990,
            priceOld: 3990,
            description: 'Привести тело в порядок',
            discount: '-50%',
            isHit: false,
        },
        {
            id: 3,
            title: '1 месяц',
            priceNew: 990,
            priceOld: 1690,
            description: 'Чтобы получить первые результаты',
            discount: '-40%',
            isHit: false,
        },
        {
            id: 4,
            title: '1 неделя',
            priceNew: 690,
            priceOld: 990,
            description: 'Чтобы просто начать',
            discount: '-30%',
            isHit: false,
        },
    ]

    return (

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-4">
            {rateLists.map((rate, index) => (
                <div key={rate.id} className={index === 0 ? "xl:col-span-3" : ""}>
                    <RateCard {...rate} />
                </div>
            ))}
        </div>
    );
};

export default Rate;