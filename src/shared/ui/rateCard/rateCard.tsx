'use client'
import React from 'react';
import cl from './rateCard.module.css'
import { useAppDispatch, useAppSelector } from "@/store/hooks/useApp";


type RateCardProps = {
    title: string,
    priceNew: number,
    priceOld: number,
    description: string,
    discount: string,
    isHit: boolean,
    descriptionMobile?: string,
}

const RateCard = (props: RateCardProps) => {

    const { isStopped } = useAppSelector(state => state.timer)

    const {
        title,
        priceNew,
        priceOld,
        description,
        discount,
        isHit,
        descriptionMobile
    } = props

    return (
        <div className={`${cl.rateCard} ${isHit ? cl.hitCard : cl.regularCard}`}>
            {!isStopped && (
                <div className={cl.badgeContainer}>
                    <span className={cl.discountBadge}>{discount}</span>
                    {isHit && <span className={cl.hitBadge}>Хит!</span>}
                </div>
            )}
            <div className={isHit ? cl.hitLayout : cl.regularLayout}>
                <div className={isHit ? cl.hitCardContentWrapper : cl.contentWrapper}>
                    <h4 className={cl.rateCardTitle}>{title}</h4>
                    <div className={cl.rateCardBody}>
                        <h1 className={isHit ? cl.rateCardPriceNewHit : cl.rateCardPriceNew}>{priceNew} ₽</h1>
                        <h5 className={cl.rateCardPriceOld}>{isStopped ? '' : `${priceOld} ₽`}</h5>
                    </div>
                </div>
                <p className={cl.rateCardDesc}>
                    <span className={cl.fullDescription}>{description}</span>
                    <span className={cl.shortDescription}>{isHit ? descriptionMobile : description}</span>
                </p>
            </div>
        </div>
    );
};

export default RateCard;