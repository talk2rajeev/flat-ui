import React from 'react';

import { RadioGroup } from "../../Radio";

export default {
    title: 'Radio',
    component: RadioGroup,
    argTypes: {
        alignment: {
            options: ['inline', 'stacked'],
            control: { type: 'radio' }
        },
    },
};


const Template = (args) => <RadioGroup {...args} />;

export const RadioButtons = Template.bind({});
RadioButtons.args = {
    defaultValue: 'Mango',
    items: ["Mango", "Banana", "Guava"],
    disabled: false,
    alignment: 'stacked',
};

