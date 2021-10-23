import React from 'react';
import { Button } from "../../Button";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        buttonType: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
        },
        buttonSize: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        }
    },
};


const Template = (args) => <Button {...args} />;

export const Button = Template.bind({});
ButtonTemplate.args = {
    buttonType: 'primary',
    label: 'Click Me',
    buttonSize: 'small',
    disabled: false,
};

