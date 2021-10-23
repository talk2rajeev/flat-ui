import React from 'react';

import { CheckboxGroup } from "../../Checkbox";

export default {
    title: 'CheckboxGroup',
    component: CheckboxGroup,
    argTypes: {
        alignment: {
            options: ['inline', 'stacked'],
            control: { type: 'radio' }
        },
    },
};


const Template = (args) => <CheckboxGroup {...args} />;

export const CheckboxGroupItems = Template.bind({});
CheckboxGroupItems.args = {
    defaultValue: 'Mango',
    items: ["Mango", "Banana", "Guava"],
    disabled: false,
    alignment: 'stacked',
    onCheckboxSelect: (item)=>{console.log(item)}
};

