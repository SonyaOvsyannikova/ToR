'use client'
import Stars from '@/assets/icons/stars.svg'
import {useAppDispatch, useAppSelector} from "@/store/hooks/useApp";
import {use, useEffect} from "react";
import {startTimer, stopTimer, tickTimer} from "@/store/slice/timerSlice";
import cl from './timer.module.css'


const Timer = () => {
    const dispatch = useAppDispatch()
    const { timeLeft, isActive, isStopped, isWarning } = useAppSelector(state => state.timer)

    const formattedTime = () => {
        let minutes = Math.floor(timeLeft / 60)
        let seconds = timeLeft % 60
        if(seconds < 10) {
            return `${minutes}:0${seconds}`
        }
        return `${minutes}:${seconds}`
    }

    useEffect(() => {
        dispatch(startTimer())
    }, [])

    useEffect(() => {
        if(!isActive) return
        const interval = setInterval(() => {
            dispatch(tickTimer())
        }, 1000)
        return () => { clearInterval(interval) }
    }, [isActive]);


    return (
        <div className='flex gap-4 items-center'>
            <Stars />
            <p className={isWarning ? cl.warning : cl.normal}>{formattedTime()}</p>
            <Stars />
        </div>
    );
};

export default Timer;