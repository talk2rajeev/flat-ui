import React, { useState } from 'react'
import { storiesOf } from "@storybook/react";
import { Button } from '../../Button'
import { Popover } from "../../Popover";
import { Card } from '../../Card';

storiesOf("Popover Component", module)
    .add("Hoverable Popover", () => {
        return <div style={{width: 400, margin: '20px auto'}}>
            <h3>Hover effect</h3>
            <p>Alignment: top</p>
            <Popover title="button 1" alignment="top" triggerType="hover">
                <Button label="button 1" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
            <p>Alignment: right</p>
            <Popover title="button 2" alignment="right" triggerType="hover">
                <Button label="button 2" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
            <p>Alignment: left</p>
            <Popover title="button 3" alignment="left" triggerType="hover">
                <Button label="button 3" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
            <p>Alignment: bottom</p>
            <Popover title="button 3" alignment="bottom" triggerType="hover">
                <Button label="button 3" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
        </div>
    })
    .add("Clickable Popover", () => {
        return <div style={{width: 400, margin: '20px auto'}}>
            <h3>Clickable</h3>
            <p>Alignment: top</p>
            <Popover title="button 1" alignment="top" triggerType="click">
                <Button label="button 1" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
            <p>Alignment: right</p>
            <Popover title="button 2" alignment="right" triggerType="click">
                <Button label="button 2" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
            <p>Alignment: left</p>
            <Popover title="button 3" alignment="left" triggerType="click">
                <Button label="button 3" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
            <p>Alignment: bottom</p>
            <Popover title="button 3" alignment="bottom" triggerType="click">
                <Button label="button 3" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
            </Popover>
        </div>
    })    
    .add("More Examples", () => {
        const ChildComponent = () => <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        return <div style={{width: 400, margin: '20px auto'}}>
            <p>Clickable</p>
            <Popover title="this is Popover, this is testing example labore et dolore magna aliqua." alignment="right" triggerType="click">
                <Card header={{title: 'This is card title', borderBottom: true}} withBoxShaddow>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Card>
            </Popover>
            <p>Hoverable</p>
            <Popover title="Popover 2" alignment="left" childComponent={<ChildComponent />} triggerType="hover">
                <Card withBoxShaddow>
                    <h5>Title of card</h5>
                    <p>
                        This is paragraph for testing the card.
                    </p>
                </Card>
            </Popover>
        </div>
    })
        