import React from 'react';

import { cnApp } from "./App.classname";
import { Button } from './components/Button/Button';
import { Profile } from './components/Profile/Profile';
import { Card } from './components/Card/Card';

import './App.css';

const App = () => {
  return (
    <div className={cnApp()}>
      <h1 className={cnApp('title')}>8.1 Знакомство с React (HW)</h1>

      <h2 className={cnApp('task-title')}>Группа кнопок на рукаве</h2>
      <div className={cnApp('button-task')}>
        <div className={cnApp('button-task_light')}>
          <Button text="Hello" />
          <Button text="Hello" transparent />
        </div>
        <div className={cnApp('button-task_dark')}>
          <Button text="Hello" dark transparent />
          <Button text="Hello" dark/>
        </div>
      </div>

      <h2 className={cnApp('task-title')}>Простопрофиля</h2>
      <div className={cnApp('profile-task')}>
        <Profile />
      </div>

      <h2 className={cnApp('task-title')}>Этовары</h2>
      <div className={cnApp('card-task')}>
        <Card 
          image="./img/product_photo.png"
          title="Дорожные Чехлы для..."
          raiting={4.7}
          ordersCount="123 купили"
          price="250 ₽"
        />

        <Card 
          title="Дорожные Чехлы для..."
          firstOrder
          price="250 ₽"
        />
      </div>
    </div>
  )
}

export default App;
