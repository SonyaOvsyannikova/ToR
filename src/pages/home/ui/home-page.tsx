import React from 'react';
import Header from "@/widget/header";
import SubscriptionPlans from "@/widget/subscription-plans/subscription-plans";
import Title from "@/widget/title/title";
import Guarantee from "@/widget/guarantee/guarantee";
import '@/shared/styles/globals.css'

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Title />
                <SubscriptionPlans />
                <Guarantee />
            </div>
        </>

    );
};

export default HomePage;