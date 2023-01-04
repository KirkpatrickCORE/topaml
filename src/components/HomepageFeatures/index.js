import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fundamental Concepts',
    Svg: require('@site/static/img/ToPaML/2.svg').default,
    description: (
      <>
        The first part develops the basic probability calculus. Anyone with a background in basic mathematics will
        have no problems learning the material.
      </>
    ),
  },
  {
    title: 'Probability Models',
    Svg: require('@site/static/img/ToPaML/13.svg').default,
    description: (
      <>
        The second part deals with material concepts more difficult and advanced. These topics are extremely important 
        when understanding modern science and especially the applied computational aspects. 
      </>
    ),
  },
  {
    title: 'Machine Learning Application',
    Svg: require('@site/static/img/ToPaML/14.svg').default,
    description: (
      <>
        The third part explores modern computational artificial intelligence systems and distinguishes between  
         <strong> machine learning</strong> and <strong>deep learning</strong>. Code snippets and <code>jupyter notebooks</code> can be 
        located in the <code>code_snippets</code> directory.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
