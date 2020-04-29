import React from 'react';

import rubenPic from '../../images/ruben.jpeg';
import davidPic from '../../images/david.png';
import pic3 from '../../images/pic03.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: rubenPic,
      heading: 'Rubén Alcázar',
      description: 'Cloud Architect / Full Stack Developer',
      to: [
        {
          href: 'https://github.com/psypersky',
          label: 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/psypersky/',
          label: 'LinkedIn',
        },
      ],
    },
    {
      href: '/#',
      image: davidPic,
      heading: 'David Ortiz',
      description: 'Full-stack Developer / Scrum Master',
      to: [
        {
          href: 'https://github.com/DavidOVM',
          label: 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/d-ortiz-vallejuelo/',
          label: 'LinkedIn',
        },
      ],
    },
    {
      href: '/#',
      image: pic3,
      heading: 'Other colaborators',
      description:
        'We work with more engineers to cover specific necessities.',
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
      {features.map(feature => (
        <Feature key={feature.heading} {...feature} />
      ))}
    </section>
  );
};

export default Features;
