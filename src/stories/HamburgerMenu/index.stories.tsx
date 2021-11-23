import React, { useState } from 'react'
import { storiesOf } from "@storybook/react";
import { HamburgerMenu, HamburgerIcon  } from "../../Menu/HamburgerMenu";

storiesOf("Ham menu", module)
    .add("Ham menu with default settings",
        () => {
            const [open, setOpen] = useState(false)
            const [activeMenu, setActiveMenu] = useState<string>('');

            return <div>
                <HamburgerIcon onclick={()=>setOpen(true)}/>
                <HamburgerMenu 
                    onMenuClose={()=>setOpen(false)} 
                    onMenuItemClick={(item: string)=>{ setActiveMenu(item)}} 
                    open={open ? true : false} 
                    menuItems={['Home', 'About', 'services', 'products', 'contact', 'career']} 
                    menuItmVariation="text"
                    showActiveMenu={true}
                    activeMenu={activeMenu}
                />
            </div>
        })