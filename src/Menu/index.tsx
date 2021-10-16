import React, { useState } from "react";
import "../assets/css/menu.css";

type Alignment = "stacked" | "inline";

export interface MenuInterface {
  onclick: (item: string) => void;
  items: Array<string>;
  alignment: Alignment;
  highlightActivemenu?: boolean;
  activeMenu?: string;
}

export const MenuText: React.FC<MenuInterface> = ({
    onclick,
    items,
    alignment,
    highlightActivemenu=false,
    activeMenu
}: MenuInterface) => {
  const [value, setValue] = useState<string | undefined>(activeMenu);

  const onClick = (item: string) => {
    setValue(item);
    onclick(item)
  };

  return (
    <div
      className={`rt-menu-container rt-menu--${alignment}`}
    >
      {
          items.map(menuitem => {
              return (
                  <div className={`rt-menu-item`}>{menuitem}</div>
              )
          })
      }
    </div>
  );
};
