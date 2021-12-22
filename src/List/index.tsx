import React, {useState, createRef} from 'react';
import '../assets/css/list.min.css';


export interface ListInterface {
    list: Array<any>,
    listItemRenderer: React.FC
}
export const List: React.FC<ListInterface> = ({ list, listItemRenderer }: ListInterface) => {
    
    
    return (
        <div className="rt-list-container">
            <div className="rt-list-grid">
                {
                    list.map((item: any) => <div className="rt-list-item">{ listItemRenderer(item) } </div>)
                }
            </div>
        </div>
    );
};
