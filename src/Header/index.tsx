import React from 'react';
import { HamburgerMenu, HamburgerIcon } from '../Menu/HamburgerMenu';
import '../assets/css/header.min.css';

interface ResponsiveHeaderInterface {
    logo: string | React.ReactElement,
    headerChildren?: React.ReactElement,
    menuList: Array<string>,
    onMenuClick: (menuItem: string) => void,
    isMenuOpen: boolean,
    onMenuOpen: () => void,
    onMenuClose: () => void,
}


export const ResponsiveHeader = ({ logo, headerChildren, menuList, onMenuClick, isMenuOpen, onMenuOpen, onMenuClose }: ResponsiveHeaderInterface) => {
    return (
        <div className={`rt-header-wrapper`}>
            <div className={`rt-header`}>
                <div>{logo}</div>
                <div className="rt-headermenu-block">
                    <HamburgerIcon onclick={onMenuOpen}/>
                    <HamburgerMenu menuItems={menuList} onMenuItemClick={onMenuClick} open={isMenuOpen} onMenuClose={onMenuClose} />
                    <div className="rt-headerchild">{ headerChildren }</div>
                </div>
            </div>
        </div>
    );
};
