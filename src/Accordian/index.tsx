import React, {useState} from 'react';
import '../assets/css/accordian.min.css';

type ListType<T> = {heading: string, value: string | T};

interface AccordianInterface<T> {
    list: Array<ListType<T>>,
    accordianItemComponent?: React.FC<any>,
}

export const Accordian: React.FC<AccordianInterface<ListType<any>>> = ({ list, accordianItemComponent }: AccordianInterface<ListType<any>>) => {
    const [state, setstate] = useState<number>(-1)
    return (
        <div className="rt-accordian-container">
            {
                list.map((item: ListType<any>, index: number) => {
                    return <div className="rt-accordian-item">
                            <div className="rt-accordian-item-header" onClick={() => setstate(index)}>{item.heading}</div>
                            <div className={`rt-accordian-item--${state === index ? 'open' : 'close'}`}>
                            {   
                                accordianItemComponent ? accordianItemComponent(item.value) :  item.value
                            }
                            </div>
                    </div>
                })
            }
        </div>
    );
};
