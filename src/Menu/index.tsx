import React, { useState } from "react";
import "../assets/css/menu.css";

type Alignment = "stacked" | "inline";

export interface MenuInterface {
  onclick: (item: string) => void;
  items: Array<string>;
  alignment?: Alignment;
  showActiveMenu?: boolean;
  activeMenu?: string;
}

export const Menu: React.FC<MenuInterface> = ({
    onclick,
    items,
    alignment = "inline",
    showActiveMenu=false,
    activeMenu
}: MenuInterface) => {
  const [value, setValue] = useState<string | undefined>(activeMenu);

  const onMenuItemclick = (item: string) => {
    setValue(item);
    onclick(item)
  };

  return (
    <div
      className={`rt-menu-container rt-menu--${alignment} rt-menu--${showActiveMenu ? 'show-active-menu' : ''}`}
    >
        {
            items.map(menuitem => {
                return (
                    <div className={`rt-menu-item rt-menu-item--${activeMenu === menuitem ? 'active' : 'noactive'}`} onClick={()=>onMenuItemclick(menuitem)}>{menuitem}</div>
                )
            })
        }
    </div>
  );
};
