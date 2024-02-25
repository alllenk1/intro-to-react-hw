import React from 'react';
import { FC } from 'react'; 

import { cnButton } from './Button.classname';

import './Button.css'

type ButtonProps = {
  text: string;
  dark?: boolean;
  secondary?: boolean;
  state?: string;
}

const Button: FC<ButtonProps> = ({ text, dark, secondary, state }) => {
  return (
    <button className={cnButton({ dark, secondary, state })}>
      {text}
    </button>
  )
}

export { Button }