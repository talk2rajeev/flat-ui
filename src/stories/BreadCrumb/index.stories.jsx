import React from 'react';
import { BreadCrumb } from "../../BreadCrumb";

export default {
    title: 'Breadcrumb',
    component: BreadCrumb,
    argTypes: {
        saperator: {
            options: ['oblique', 'singleArrow', 'doubleArrow'],
            control: { type: 'radio' }
        },
        list: []
    },
};


const Template = (args) => <BreadCrumb {...args} />;

export const BreadcrumbTemplate = Template.bind({});
BreadcrumbTemplate.args = {
    saperator: 'oblique',
    list: ['home', 'product', 'TV'],
};

