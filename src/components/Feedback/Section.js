import React from 'react';
import s from './Feedback.module.css';

const Section = ({ children, title }) => (
  <section title={title} className={s.Section}>
    {children}
  </section>
);

export default Section;
