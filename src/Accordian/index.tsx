import React, {useState, createRef} from 'react';
import '../assets/css/accordian.min.css';

interface AccordianInterface {
    list: Array<string>,
    onclick: (item: string) => void,
    children: React.ReactNode,
    hasArrow: boolean,
    arrowAlignment: 'left' | 'right',
}
export const Accordian: React.FC<AccordianInterface> = ({ list, onclick, children, hasArrow=false, arrowAlignment="left" }: AccordianInterface) => {
    const [state, setstate] = useState<number>(-1)

    const onclickHandler = (index: number) => {
        setstate(c => {
            return index;
        });
    }
    
    return (
        <div className="rt-accordian-container">
            {
                list.map((item: string, index: number) => {
                    return <div className="rt-accordian-item">
                            <div className={`rt-accordian-item-header rt-accordian--${state === index ? 'open' : 'close'} ${hasArrow ? 'rt-accordian-header--arrow rt-accordian-header--arrow-' +arrowAlignment : null}`} onClick={() => onclickHandler(index)}>
                                {
                                    hasArrow ? <span className={`rt-accordian-arrow--${arrowAlignment}`}>
                                        <AccordianArrow />
                                    </span> : null
                                }
                                {item}
                            </div>
                            <div className={`rt-accordian-item--${state === index ? 'open' : 'close'}`} >
                            {   
                                children
                            }
                            </div>
                    </div>
                })
            }
        </div>
    );
};

const AccordianArrow = () => <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style={{}}>
    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
</svg>
