import React from 'react';
import '../assets/css/button.css';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonInterface {
    buttonType: ButtonType,
    label: string,
    buttonSize: ButtonSize,
    onclick: (item: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean    
}

export const Button = ({ buttonType, buttonSize, label, onclick, disabled }: ButtonInterface) => {
  
    return (
        <button
            type="button"
            className={`rt-btn rt-btn--${buttonType} rt-btn--${buttonSize}`}
            onClick={onclick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
