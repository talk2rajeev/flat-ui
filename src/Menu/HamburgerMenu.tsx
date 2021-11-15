import React, { useState } from "react";
import "../assets/css/hamburgermenu.css";

export interface HamburgerMenuInterface {
    onclose: () => void;
    onMenuItemClick: (menu: string) => void;
    open: boolean;
    menuItems: Array<string>;
    showActiveMenu?: boolean;
    activeMenu?: string;
    menuItmVariation?: 'button' | 'text';
}

export const HamburgerMenu: React.FC<HamburgerMenuInterface> = ({
    open,
    onclose,
    onMenuItemClick,
    menuItems,
    showActiveMenu=false,
    activeMenu,
    menuItmVariation='text'
}: HamburgerMenuInterface) => {
  const [value, setValue] = useState<string | undefined>(activeMenu);

  const onMenuItemclick = (item: string) => {
    setValue(item);
    onMenuItemClick(item)
  };

  return (
    <div
      className={`rt-hamburger-menu-container rt-hamburger-menu--${open ? 'open' : 'close'} rt-hamburger-menu--${menuItmVariation} rt-hamburger-menu--${showActiveMenu ? 'show-active-menu' : ''}`}
    >
        <span className="closebtn" onClick={onclose}>&times;</span>
        {
            menuItems.map((menu: string) => <span className="hamburger-menu--item" onClick={() => onMenuItemclick(menu)}>{menu}</span>)
        }
    </div>
  );
};

export const HamburgerIcon = ({onclick}: {onclick: ()=> void}) => <span style={{fontSize:30, cursor: 'pointer'}} onClick={onclick}>&#9776;</span>