import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { Tab } from "../../Tab";

const RenderChild = ({activeTab}) => {
    return <div>{activeTab}</div>
}

const tabList = ['One', 'Two', 'Three'];
const RenderChild1 = ({activeTab}) => { 
    switch(activeTab) {
        case 'One':
            return <h1>One</h1>
        case 'Two':
            return <p>One</p>    
        case 'Three':
            return <h4>Three</h4>    
        default:
            return <p>{activeTab}</p>;    
    }
}

storiesOf("Tab", module)
.add("Simple Tab",() => {
    return <div>
        <Tab
            tabList={ ['One', 'Two', 'Three'] }
            renderChild={RenderChild}
            defaultTab="One"
        />
    </div>
})
.add("Custom Tab child",() => {
    return <div>
        <Tab
            tabList={ tabList }
            renderChild={RenderChild1}
            defaultTab="One"
        />
    </div>
})