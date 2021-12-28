import React, {useState} from 'react'
import { storiesOf } from "@storybook/react";
import { List } from "../../List";

storiesOf("List", module)
.add("Simple List",() => {
    const Item = (item: any) => <div>{item}</div>
    return <div>
        <h1>List</h1>
        <List
            list={ ['One', 'Two', 'Three'] }
            listItemRenderer = {Item}
        />
    </div>
})
.add("Complex List",() => {
    const Item = (item: any) => <div>
        <h5 style={{margin: 0, padding: 0}}>{item.label}</h5>
        <div style={{color: '#777', fontSize: 9}}>{item.subLabel}</div>
    </div>
    return <div>
        <h1>List</h1>
        <List
            list={ [{label: 'Global Warming', subLabel: '12 Dec 2021'}, {label: 'Reason for increase in global temperature', subLabel: '13 Dec 2021'}, {label: 'Why costal countries are in danger', subLabel: '14 Dec 2021'}] }
            listItemRenderer = {Item}
        />
    </div>
})
.add("Complex List with onClick",() => {
    const onclick = (item) => {
        console.log(item)
    }
    const Item = (item: any) => <div onClick={()=> onclick(item)}>
        <h5 style={{margin: 0, padding: 0}}>{item.label}</h5>
        <div style={{color: '#777', fontSize: 9}}>{item.subLabel}</div>
    </div>
    return <div>
        <h1>List</h1>
        <List
            list={ [{label: 'Global Warming', subLabel: '12 Dec 2021'}, {label: 'Reason for increase in global temperature', subLabel: '13 Dec 2021'}, {label: 'Why costal countries are in danger', subLabel: '14 Dec 2021'}] }
            listItemRenderer = {Item}
        />
    </div>
})