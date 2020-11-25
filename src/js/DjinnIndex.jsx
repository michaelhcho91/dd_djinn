import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DjinnCanvas from './DjinnCanvas';
import DjinniCard from './DjinniCard';
import djinnData from '../resources/djinnData.json';
import { matchPathElement } from '../resources/utils.js';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

const DjinnIndex = ({ location = { pathname: '' } }) => {
  const element = matchPathElement(location.pathname);
  useEffect(() => {
    const index = document.getElementById('djinn-index');
    if (index) {
      const componentHeight = document.getElementById('djinn-index').clientHeight;
      DjinnCanvas.initialize(componentHeight, element);
    }

    return () => {
      DjinnCanvas.reset();
    };
  });

  if (element) {
    const djinnToRender = djinnData[element].djinn.map(djinni => {
      return (
        <DjinniCard djinni={djinni} key={djinni.id} />
      );
    });
  
    return (
      <section id="djinn-index" className={`djinn-index ${element}`}>
        <div className="djinni-card-wrapper">
          {djinnToRender}
        </div>
      </section>
    );
  }

  return null;
};

DjinnIndex.propTypes = propTypes;

export default DjinnIndex;