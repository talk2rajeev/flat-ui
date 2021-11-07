import React from 'react';
import { Accordian } from "../../Accordian";

// const CustomComponent = ({heading, value}) => <div><h3>{heading}</h3><p>{value}</p></div>
function CustomComponent(props: {h: string, v: string}) {
    return <div><h3>{props.h}</h3><p>{props.v}</p></div>
}


export default {
    title: 'Accordian',
    component: Accordian,
    argTypes: {
        list: [{heading: 'panel 1', value: 'values 1' }, {heading: 'panel 2', value: 'values 2' }],
    },
};


const Template = (args) => <Accordian {...args} />;

export const SimpleAccordian = Template.bind({});
SimpleAccordian.args = {
    list: [{heading: 'panel 1', value: 'values 1' }, {heading: 'panel 1', value: 'values 1' }]
};


export const CustomAccordian = Template.bind({});
CustomAccordian.args = {
    list: [
        {heading: 'panel 1', value: {h: 'content heading1', v: 'content value1'}},
        {heading: 'panel 2', value: {h: 'content heading2', v: 'content value2'}}
    ],
    accordianItemComponent: CustomComponent
};


function CustomComponent1(props: { para: string}) {
    return <div><p>{props.para}</p></div>
}
export const CustomAccordian1 = Template.bind({});
CustomAccordian1.args = {
    list: [
        {heading: 'This is Panel 1', value: {para: 'lorem ipsum is is used as a placeholder for dummy text'}},
        {heading: 'This is Panel 2', value: {para: 'used as a placeholder lorem ipsum is is used as a placeholder for text'}}
    ],
    accordianItemComponent: CustomComponent1
};

