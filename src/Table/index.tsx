import React, { useState } from 'react';
import '../assets/css/table.min.css';

export interface TableInterface {
    data: Array<any>,
    bordered?: boolean,
}


export const DatePicker = ({ data, bordered }: TableInterface) => {

    const getHeader = (data: Array<any>) => {
        const row = data[0];
        const headerItems: Array<string> = [];
        Object.keys(headerItems).forEach(key => headerItems.push(key));
        return headerItems;
    }

    const headerItems: Array<string> = getHeader(data);
    
    return (
        <div className="rt-table-wrapper">
            <div className="rt-table-header">
                {
                    headerItems.map(header => <div key={header}>{header}</div>)
                }
            </div>
        </div>
    );
};
