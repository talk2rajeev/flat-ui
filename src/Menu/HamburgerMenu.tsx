import React, { useState } from "react";
import "../assets/css/hamburgermenu.css";

export interface HamburgerMenuInterface {
    onMenuClose: () => void;
    onMenuItemClick: (menu: string) => void;
    open: boolean;
    menuItems: Array<string>;
    showActiveMenu?: boolean;
    activeMenu?: string;
    menuItmVariation?: 'button' | 'text';
}

export const HamburgerMenu: React.FC<HamburgerMenuInterface> = ({
    open,
    onMenuClose,
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
        <span className="closebtn" onClick={onMenuClose}>&times;</span>
        {
            menuItems.map((menu: string) => <div className="hamburger-menu--item"><span className={`hamburger-menu--item-text hamburgermenu--${menuItmVariation} hamburgermenu--${menuItmVariation}-${activeMenu === menu ? 'active' : ''}`} onClick={() => onMenuItemclick(menu)}>{menu}</span></div>)
        }
    </div>
  );
};

export const HamburgerIcon = ({onclick}: {onclick: ()=> void}) => <span className="hamburger-icon" onClick={onclick}>&#9776;</span>