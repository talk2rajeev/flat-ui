import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/dropdown.min.css';

interface DropdownInterface {
    children: React.ReactElement,
    dropdownItemsList: Array<string>,
    triggerType: 'hover' | 'click'
}


export const Dropdown = ({ children, dropdownItemsList, triggerType }: DropdownInterface) => {

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
        <div ref={wrapperRef} className={`rt-dropdown-wrapper rt-dropdown-animation-class`} {...event}>
            {
                showPopover && <div className={`rt-dropdown-list rt-dropdown--align-bottom`} >
                    {
                        dropdownItemsList.map((item: string) => <div className="rt-dropdown-listitem">
                            { item }
                        </div>)
                    }
                </div>
            }
            {children}
        </div>
    );
};
