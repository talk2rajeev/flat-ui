import React, { createRef, useEffect, useState } from 'react';
import '../assets/css/tooltip.min.css';

interface TooltipInterface {
    title: string,
    children: React.ReactElement
}

const tooltipRef = createRef<HTMLDivElement>();

export const Tooltip = ({ title, children }: TooltipInterface) => {

    const [showTooltip, setShowTooltip] = useState(false)

    const mouseEnter = () => {
        setShowTooltip(true)
    }

    const mouseLeave = () => {
        setShowTooltip(false)
    }
    
    useEffect(() => {
        
        tooltipRef.current?.addEventListener('mouseenter', mouseEnter)
        tooltipRef.current?.addEventListener('mouseleave', mouseLeave)
        
        return () => {
            tooltipRef.current?.removeEventListener('mouseenter', ()=>{});
            tooltipRef.current?.removeEventListener('mouseLeave', ()=>{})
        }
    }, [])

    return (
        <div className={`rt-tooltip-wrapper rt-tooltip-animation-class`} ref={tooltipRef}>
            {
                showTooltip && <div>{title}</div>
            }
            { children }
        </div>
    );
};
