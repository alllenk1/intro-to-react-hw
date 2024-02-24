import React from 'react';
import type { FC } from 'react';

import { cnUser } from './User.classname';

import './User.css';

const defaultSrc = "./img/default_avatar.jpeg";

type UserProps = {
  login: string;
  avatar?: string;
  description?: string;
}

const User: FC<UserProps> = ({ avatar, login, description }) => {
  return (
    <div className={cnUser()}>
      <img className={cnUser('avatar')} src={avatar ? avatar : defaultSrc} alt="user avatar" width="157" height="157"/>
      <span className={cnUser('login')}>{login}</span>
      <p className={cnUser('description')}>{description}</p>
      <button className={cnUser('editor-button')}><img src="./img/editor-button.svg" alt="editor button"/></button>
    </div>
  )
}

export { User };