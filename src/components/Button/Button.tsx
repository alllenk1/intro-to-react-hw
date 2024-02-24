import React from 'react';
import { FC } from "react"; 

import { cnButton } from "./Button.classname";

import './Button.css'

type ButtonProps = {
  text: string;
  dark?: boolean;
  transparent?: boolean;
}

const Button: FC<ButtonProps> = ({ text, dark, transparent }) => {
  return (
    <button className={cnButton( { dark, transparent })}>
      {text}
    </button>
  )
}

export { Button }