import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import s from './Main.module.scss';

const Main = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const utm_source = params.get('utm_source');
  const utm_medium = params.get('utm_medium');
  const utm_campaign = params.get('utm_campaign');
  const gclid = params.get('gclid');
  const utm_term = params.get('utm_term');
  const utm_content = params.get('utm_content');

  useEffect(() => {
    console.log('utm_source:', utm_source);
    console.log('utm_medium:', utm_medium);
    console.log('utm_campaign:', utm_campaign);
    console.log('gclid:', gclid);
    console.log('utm_term:', utm_term);
    console.log('utm_content:', utm_content);
  }, [utm_source, utm_medium, utm_campaign, gclid, utm_term, utm_content]);

  const utmParams = [
    utm_source && `utm_source=${utm_source}`,
    utm_medium && `utm_medium=${utm_medium}`,
    utm_campaign && `utm_campaign=${utm_campaign}`,
    gclid && `gclid=${gclid}`,
    utm_term && `utm_term=${utm_term}`,
    utm_content && `utm_content=${utm_content}`,
  ].filter(Boolean).join('&');

  const yesLink = `https://cloud-crafters.com.ua${utmParams ? `?${utmParams}` : ''}`;
  const noLink = `/crafters/no${utmParams ? `?${utmParams}` : ''}`;

  return (
    <div className={s.mainContainer}>
      <h1>Привіт</h1>
      <h3>Тобі вже є 18?</h3>
      <div className={s.buttonContainer}>
        <NavLink to={yesLink} className={s.btnYes}>
          Так
        </NavLink>
        <NavLink to={noLink} className={s.btnNo}>
          Ні
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
