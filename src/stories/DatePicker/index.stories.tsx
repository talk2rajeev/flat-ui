import React from 'react';

import { DatePicker } from '../../DatePicker';

const icon = <span>🔍</span>;
const fn = (d) => console.log(d)

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DatePicker Component',
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    defaultDate: null,
    onDateSelect: fn,
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DatePicker {...args} />;

export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {
    defaultDate: new Date(),
};



