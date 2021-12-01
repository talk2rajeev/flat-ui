import React, { createRef, useState } from 'react';
import '../assets/css/tooltip.min.css';

export interface TooltipInterface {
    title: string,
    children: React.ReactElement,
    alignment: 'top' | 'bottom' | 'left' | 'right'
}

const tooltipRef = createRef<HTMLDivElement>();

export const Tooltip = ({ title, children, alignment }: TooltipInterface) => {

    const [showTooltip, setShowTooltip] = useState(false)

    const mouseEnter = () => {
        setShowTooltip(true)
    }

    const mouseLeave = () => {
        setShowTooltip(false)
    }

    return (
        <div className={`rt-tooltip-wrapper rt-tooltip-animation-class`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} ref={tooltipRef}>
            {
                showTooltip && <div className={`rt-tooltip-text rt-tooltip--align-${alignment}`}><span className={`rt-tooltip-arrow rt-tooltip-arrow--align-${alignment}`}/>{title}</div>
            }
           
            {children}
        </div>
    );
};
