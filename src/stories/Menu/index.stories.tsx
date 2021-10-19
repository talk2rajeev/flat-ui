import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { Menu } from "../../Menu";

storiesOf("Menu", module)
    .add("Menu with default setting",
        () => {
            const onInputChange = (val) => {
                console.log("value", val);
            };
            return <Menu
                onclick={onInputChange}
                items={['Home', 'About', 'Contacts']}
                alignment="stacked"
                showActiveMenu={false}
                activeMenu="Home"
            />
        }
    );