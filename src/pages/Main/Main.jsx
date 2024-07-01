import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Main.module.scss';

const Main = () => {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      console.log(`Main${key}: ${value}`);
    });
  }, []);

  return (
    <div className={s.mainContainer}>
      <h1>Привіт</h1>
      <h3>Тобі вже є 18?</h3>
      <div className={s.buttonContainer}>
        <a href="https://cloud-crafters.com.ua" className={s.btnYes}>
          Так
        </a>
        <NavLink to="/crafters/no" className={s.btnNo}>
          Ні
        </NavLink>
      </div>
    </div>
  );
};

export default Main;



// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';

// import s from './Main.module.scss';

// const Main = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);

//   const utm_source = params.get('utm_source');
//   const utm_medium = params.get('utm_medium');
//   const utm_campaign = params.get('utm_campaign');
//   const gclid = params.get('gclid');
//   const utm_term = params.get('utm_term');
//   const utm_content = params.get('utm_content');



//   const utmParams = [
//     utm_source && `utm_source=${utm_source}`,
//     utm_medium && `utm_medium=${utm_medium}`,
//     utm_campaign && `utm_campaign=${utm_campaign}`,
//     gclid && `gclid=${gclid}`,
//     utm_term && `utm_term=${utm_term}`,
//     utm_content && `utm_content=${utm_content}`,
//   ].filter(Boolean).join('&');

//   const mainSiteLink = `https://cloud-crafters.com.ua${utmParams ? `?${utmParams}` : ''}`;

//   return (
//     <div className={s.mainContainer}>
//       <h1>Привіт</h1>
//       <h3>Тобі вже є 18?</h3>
//       <div className={s.buttonContainer}>
//         <NavLink to={mainSiteLink} className={s.btnYes}>
//           Так
//         </NavLink>
//         <NavLink to="/crafters/no" className={s.btnNo}>
//           Ні
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Main;
