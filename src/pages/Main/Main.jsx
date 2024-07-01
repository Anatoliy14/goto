import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Main.module.scss';

const Main = () => {
  return (
    <div className={s.mainContainer}>
      <h1>Привіт</h1>
      <h3>Тобі вже є 18?</h3>
      <div className={s.buttonContainer}>
        <NavLink to="https://cloud-crafters.com.ua" className={s.btnYes}>
          Так
        </NavLink>
        <NavLink to="/crafters/no" className={s.btnNo}>
          Ні
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
