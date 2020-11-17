import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { initializeCanvas } from './Canvas';
import djinnData from '../resources/djinnData.json';
import DjinniCard from './DjinniCard';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

const DjinnContainer = ({ location }) => {
  useEffect(() => {
    const componentHeight = document.getElementById('djinn-container').clientHeight;
    initializeCanvas(componentHeight);
  });
  
  const elements = Object.keys(djinnData);
  let type = '';
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (location.pathname.includes(element)) type = element;
  }

  const djinnToRender = djinnData[type].djinn.map(djinni => {
    return (
      <DjinniCard djinni={djinni} key={djinni.id} />
    );
  });

  return (
    <section id="djinn-container" className={`djinn-container ${type}`}>
      <div className="djinn-card-wrapper">
        {djinnToRender}
      </div>
    </section>
  );
};

DjinnContainer.propTypes = propTypes;

export default DjinnContainer;