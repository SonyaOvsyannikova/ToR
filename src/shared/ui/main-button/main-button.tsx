'use client'
import cl from './main-button.module.css'


type MainButtonProps = {
    onClick?: () => void;
    label?: string;
    type?: 'button' | 'submit';
}
const MainButton = (props: MainButtonProps) => {
    const {
        onClick,
        label,
        type
    } = props

    return (
        <button
            className={cl.mainButton}
            onClick={onClick} type={type}>{label}</button>
    );
};

export default MainButton;