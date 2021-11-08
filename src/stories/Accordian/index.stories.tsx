import React from 'react';
import { Accordian } from "../../Accordian";

// const CustomComponent = ({heading, value}) => <div><h3>{heading}</h3><p>{value}</p></div>
function CustomComponent(props: {h: string, v: string}) {
    return <div><h3>{props.h}</h3><p>{props.v}</p></div>
}

const list = ['Panel1', 'Panel2'];
export default {
    title: 'Accordian',
    component: Accordian,
    argTypes: {
        list: list,
        children: <div>this is children</div>,
        hasArrow: true,
        arrowAlignment: {
            options: ['left', 'right'],
            control: { type: 'radio' }
        }
    },
};


const Template = (args) => <Accordian {...args} />;

export const SimpleAccordian = Template.bind({});
SimpleAccordian.args = {
    list: ['Panel-1', 'Panel-2'],
    children: <div>This is SimpleAccordian children</div>,
    hasArrow: true,
};

export const CustomAccordian = Template.bind({});
CustomAccordian.args = {
    list: ['Panel-1.1', 'Panel-2.1'],
    children: <div>This is CustomAccordian children</div>,
    hasArrow: true,
};

