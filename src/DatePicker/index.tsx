import React, { useState } from 'react';
import '../assets/css/datepicker.min.css';

interface DatePickerInterface {
    defaultDate: string,
    onDateSelect: (date: string) => void
}


export const DatePicker = ({ defaultDate, onDateSelect }: DatePickerInterface) => {
    const [selectedDate, setSelectedDate] = useState(defaultDate)
    
    const onselect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
        onDateSelect(e.target.value)
    }

    return (
        <div className="rt-datepicker-wrapper">
            <input className="rt-datepicker" type="date" value={selectedDate} onChange={onselect}/>
        </div>
    );
};
