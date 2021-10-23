import React from 'react';

import { InputNumber } from '../../InputNumber';

const icon = <span>🔍</span>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InputNumber Component',
  component: InputNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    border: true,
    borderRadius: false,
    disabled: false,
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputNumber {...args} />;

export const TextNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextNumber.args = {
    borderRadius: false,
    border: true,
    disabled: false,
};



