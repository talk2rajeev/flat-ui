import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/popover.min.css';

interface PopoverInterface {
    title: string,
    children: React.ReactElement,
    alignment: 'top' | 'bottom' | 'left' | 'right',
    childComponent?: React.ReactElement,
    triggerType: 'hover' | 'click'
}


export const Popover = ({ title, children, alignment, childComponent, triggerType }: PopoverInterface) => {

    const wrapperRef = useRef<HTMLInputElement>(null);

    const [showPopover, setShowPopover] = useState(false)

    const mouseEnter = () => {
        setShowPopover(true)
    }

    const mouseLeave = () => {
        setShowPopover(false)
    }

    const clickAnywhere = (e: any) => {
        if (wrapperRef.current && !wrapperRef.current!.contains(e.target)) {
            setShowPopover(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", clickAnywhere);
    
        return () => {
          document.removeEventListener("click", clickAnywhere);
        };
    }, []);

    const event = triggerType === "click" ? { onClick: mouseEnter } : {  onMouseEnter: mouseEnter, onMouseLeave: mouseLeave };
    

    return (
        <div ref={wrapperRef} className={`rt-popover-wrapper rt-popover-animation-class`} {...event}>
            {
                showPopover && <div className={`rt-popover-text rt-popover--align-${alignment}`} >
                    <span className={`rt-popover-arrow rt-popover-arrow--align-${alignment}`}/>
                    {title}
                    <div className="rt-popover-childComponent">{childComponent}</div>
                </div>
            }
            {children}
        </div>
    );
};
