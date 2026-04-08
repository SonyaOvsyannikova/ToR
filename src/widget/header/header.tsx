import React from 'react';
import Timer from "@/shared/ui/timer/timer";
import cl from './header.module.css'

const Header = () => {

    return (
        <div className='bg-header flex flex-col justify-center items-center'>
            <div className="container flex flex-col items-center">
                <h4>Успейте открыть пробную неделю</h4>
                <Timer />
            </div>
        </div>
    );
};

export default Header;