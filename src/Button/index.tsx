import React from 'react';
import '../assets/css/button.css';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonInterface {
    buttonType: ButtonType,
    label: string,
    buttonSize: ButtonSize,
    onclick: () => void,
    disabled?: boolean,
    withBorderRadius?: boolean,    
}

export const Button = ({ buttonType, buttonSize, label, onclick, disabled, withBorderRadius }: ButtonInterface) => {
    
    return (
        <button
            type="button"
            className={`rt-btn rt-btn--${buttonType} rt-btn--${buttonSize} ${withBorderRadius ? 'rt-btn--withradius' : ''}`}
            onClick={onclick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
