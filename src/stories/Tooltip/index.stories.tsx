import React, { useState } from 'react'
import { storiesOf } from "@storybook/react";
import { Button } from '../../Button'
import { Tooltip  } from "../../Tooltip";
import { Card } from '../../Card';

storiesOf("Tooltip", module)
    .add("Tooltip",  () => {
            return <div style={{width: 400, margin: '20px auto'}}>
                <p>Alignment: top</p>
                <Tooltip title="button 1" alignment="top">
                    <Button label="button 1" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
                </Tooltip>
                <p>Alignment: right</p>
                <Tooltip title="button 2" alignment="right">
                    <Button label="button 2" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
                </Tooltip>
                <p>Alignment: left</p>
                <Tooltip title="button 3" alignment="left">
                    <Button label="button 3" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
                </Tooltip>
                <p>Alignment: bottom</p>
                <Tooltip title="button 3" alignment="bottom">
                    <Button label="button 3" buttonType="primary" buttonSize="medium" onclick={()=>{}} />
                </Tooltip>
            </div>
        })
        .add("More examples", () => {
            return <div style={{width: 400, margin: '20px auto'}}>
                <p>Alignment: left</p>
                <Tooltip title="this is tooltip, this is testing example" alignment="left">
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
                </Tooltip>
                <p>Alignment: right</p>
                <Tooltip title="tooltip 2" alignment="right">
                    <Card withBoxShaddow>
                        <h5>Title of card</h5>
                        <p>
                            This is paragraph for testing the card.
                        </p>
                    </Card>
                </Tooltip>
            </div>
        })
        