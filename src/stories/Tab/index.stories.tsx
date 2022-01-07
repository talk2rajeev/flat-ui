import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { Tab } from "../../Tab";

const RenderChild = ({activeTab}) => {
    return <div>{activeTab}</div>
}

storiesOf("Tab", module)
.add("Simple Tab",() => {
    const Item = (item: any) => <div>{item}</div>
    return <div>
        <Tab
            tabList={ ['One', 'Two', 'Three'] }
            renderChild={RenderChild}
        />
    </div>
})