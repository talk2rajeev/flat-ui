import React, { useState } from 'react'
import { storiesOf } from "@storybook/react";

import { Menu } from "../../Menu";
import { HamburgerMenu, HamburgerIcon  } from "../../Menu/HamburgerMenu";

storiesOf("Ham menu", module)
    .add("Ham menu with default settings",
        () => {
            const [open, setOpen] = useState(false)

            return <div>
                <HamburgerIcon onclick={()=>setOpen(true)}/>
                <HamburgerMenu 
                    onclose={()=>setOpen(false)} 
                    onMenuItemClick={(item: string)=>{ console.log(item)}} 
                    open={open ? true : false} 
                    menuItems={['Home', 'About']} 
                />
            </div>
        })