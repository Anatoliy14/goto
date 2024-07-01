import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './No.module.scss';

const No = () => {
  return (
    <>
      <div className={s.mainContainer}>
        <h1>Шкода...</h1>
        <h3>Відповісти ще раз?</h3>
        <div className={s.buttonContainer}>
          <NavLink to="/crafters" className={s.btnYes}>
            Так
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default No;
