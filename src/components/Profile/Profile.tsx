import React from 'react';
import { FC } from "react";

import { cnProfile } from './Profile.classname';
import { User } from './User/User';
import { MenuItem } from './MenuItem/MenuItem';
import type { MenuItemProps } from './MenuItem/MenuItem';

import './Profile.css';

const menuItems: MenuItemProps[] = [
  {
    icon: "./img/account.svg",
    text: "Account"
  },
  {
    icon: "./img/chat-settings.svg",
    text: "Chat Settings"
  },
  {
    icon: "./img/notifications.svg",
    text: "Notifications"
  },
  {
    icon: "./img/storage.svg",
    text: "Storage"
  },
  {
    icon: "./img/help.svg",
    text: "Help"
  },
  {
    icon: "./img/invite.svg",
    text: "Invite a friend"
  },
]

const Profile = () => {
  return (
    <div className={cnProfile()}>
      <div className={cnProfile('container')}>
        <div className={cnProfile('header')}>
          <button className={cnProfile('header-button')}></button>
          <p className={cnProfile('header-text')}>Profile</p>
        </div>

        <div className={cnProfile('body')}>
          <User 
            login="Jane Doe"
            avatar="/img/avatar.png"
            description="This is a small bio description to let users
            express themselves"
            />
          <div className={cnProfile('menu')}>
            {menuItems.map((item, index) => <MenuItem key={index} {...item} />)}
          </div>
          <button className={cnProfile('button')}>logout</button>
        </div>
      </div>
    </div>
  )
}

export { Profile }