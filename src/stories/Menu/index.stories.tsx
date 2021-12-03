import React, { useState } from 'react'
import { storiesOf } from "@storybook/react";
import { Menu } from "../../Menu";


export default  {
    title: 'Menu',
    component: Menu,
    argTypes: {
        alignment: {
            options: ['inline', 'stacked'],
            control: { type: 'radio' }
        },
    },
};


const Template = (args) => <Menu {...args} />;

export const MenuComponent = Template.bind({});
MenuComponent.args = {
    activeMenu: 'Home',
    items: ['Home', 'About', 'Contacts'],
    disabled: false,
    alignment: 'stacked',
    showActiveMenu: true,
    onclick: clickHandler
};

function clickHandler(item) {
    console.log(item)
}
