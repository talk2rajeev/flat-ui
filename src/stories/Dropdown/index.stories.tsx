
import React, { useState } from 'react'
import { storiesOf } from "@storybook/react";
import { Dropdown } from "../../Dropdown";
import { Button } from "../../Button";
import { Card } from "../../Card";


storiesOf("Dropdown", module)
    .add("Dropdown 1",() => {
        const [open, setOpen] = useState(false)
        
        return <div>
            <p>button 1</p>
            <Dropdown dropdownItemsList= {['Settings', 'Gear', 'Logout']} triggerType= "hover">
                <Button label="click me" onclick={()=> setOpen(true)} buttonType="primary" buttonSize="medium" />
            </Dropdown>

        </div>
    })
    .add("Dropdown 2",() => {
        const [open, setOpen] = useState(false)
        
        return <div>
            <p>button 2</p>
            <Dropdown dropdownItemsList= {['Settings', 'Gear', 'Logout']} triggerType= "click">
                <Button label="This is another button" onclick={()=> setOpen(true)} buttonType="primary" buttonSize="medium" />
            </Dropdown>
        </div>
    })
    .add("Dropdown 2",() => {
        const [open, setOpen] = useState(false)
        
        return <div>
            <p>button 2</p>
            <Dropdown dropdownItemsList= {['Settings', 'Gear', 'Logout']} triggerType= "click">
                <Button label="This is another button" onclick={()=> setOpen(true)} buttonType="primary" buttonSize="medium" />
            </Dropdown>
        </div>
    })
    .add("Dropdown 3",() => {
        const [open, setOpen] = useState(false)
        
        return <div>
            <p>button 2</p>
            <Dropdown dropdownItemsList= {['Settings', 'Gear', 'Logout']} triggerType= "click">
                <div onClick={()=> setOpen(true)}>
                    <Card withBoxShaddow>
                        <h5>This is Title</h5>
                        <p>This is paragraph regarding card. This is to test the drop down component.</p>
                    </Card>
                </div>
            </Dropdown>
        </div>
    })