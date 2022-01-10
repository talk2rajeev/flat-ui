import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/datepicker.min.css';

interface DatePickerInterface {
    defaultDate: string,
}


export const DatePicker = ({ defaultDate }: DatePickerInterface) => {
    const [selectedDate, setSelectedDate] = useState(defaultDate)
    

    return (
        <div className="rt-datepicker-wrapper">
            <input type="date" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)}/>
        </div>
    );
};
