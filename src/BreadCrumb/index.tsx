

import React from 'react';
import '../assets/css/breadcrumb.min.css';

type saperator = 'oblique' | 'singleArrow' | 'doubleArrow';

interface BreadCrumbInterface {
    list: Array<string>,
    saperator: saperator,
}

export const BreadCrumb = ({ list, saperator }: BreadCrumbInterface) => {
    
    return (
        <div
            className={`rt-breadcrumb`}
        >
            {
                list.map((item: string) => <div className={`rt-breadcrumb-item rt-breadcrumb--${saperator}`}>{item}</div>)
            }
        </div>
    );
};
 