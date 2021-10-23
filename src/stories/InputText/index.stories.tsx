import React from 'react';

import { InputText } from '../../InputText';

const icon = <span>🔍</span>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InputText Component',
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    border: true,
    borderRadius: false,
    disabled: false,
    icon: {
        options: [<span>🔍</span>, null],
        control: { type: 'radio' }
    },
    iconAlignment: {
        options: ['left', 'right'],
        control: { type: 'radio' }
    },
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputText {...args} />;

export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {
    borderRadius: false,
    border: true,
    disabled: false,
    icon: <span>🔍</span>,
    iconAlignment: 'left'
};



