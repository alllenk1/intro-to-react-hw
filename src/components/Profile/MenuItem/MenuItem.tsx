import React from 'react';
import { FC } from "react";

import { cnMenuItem } from './MenuItem.classname'

import './MenuItem.css'

type MenuItemProps = {
  icon: string;
  text: string;
}

const MenuItem: FC<MenuItemProps> = ({ icon, text }) => {
  return (
    <button className={cnMenuItem()}>
        <img className={cnMenuItem('icon')} src={icon} alt="menu item icon" />
        <span className={cnMenuItem('text')}>{text}</span>
    </button>
  )
}

export { MenuItem };
export type { MenuItemProps };