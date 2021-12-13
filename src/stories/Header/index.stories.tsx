import React, { useState } from 'react'
import { storiesOf } from "@storybook/react";
import { ResponsiveHeader  } from "../../Header";
import { Avatar  } from "../../Avatar";
import { Dropdown  } from "../../Dropdown";



storiesOf("Header", module)
    .add("Responsive Header",
        () => {
            const [open, setOpen] = useState(false)
            const [openDropDown, setOpenDropDown] = useState(false);

            const onMenuClick = (menu: string) => {
                console.log(menu)
            }

            const onDropdownItemClick = (item: string) => {
                console.log(item)
            }

            const DD = () => {
                return <Dropdown dropdownItemsList={['settings', 'Logout']} triggerType= "click">
                    <span onClick={()=>setOpenDropDown(true)}>
                        <Avatar userName="Alex" userRole="Developer" />
                    </span>
                </Dropdown>
            }

            return <div>
                <ResponsiveHeader
                    logo= {<div>Logo</div>}
                    menuList= {['Home', 'About', 'Contact']}
                    onMenuClick={onMenuClick}
                    isMenuOpen= {open}
                    onMenuOpen= {()=>setOpen(true)}
                    onMenuClose= {()=>setOpen(false)}
                    headerChildren = {<DD />}
                />
            </div>
        })