import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DjinnCanvas from './DjinnCanvas';
import DjinniCard from './DjinniCard';
import djinnData from '../resources/djinnData.json';
import { matchPathElement } from '../resources/utils';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

const DjinnContainer = ({ location }) => {
  const element = matchPathElement(location.pathname);
  useEffect(() => {
    const componentHeight = document.getElementById('djinn-container').clientHeight;
    DjinnCanvas.initialize(componentHeight, element);
  });

  const djinnToRender = djinnData[element].djinn.map(djinni => {
    return (
      <DjinniCard djinni={djinni} key={djinni.id} />
    );
  });

  return (
    <section id="djinn-container" className={`djinn-container ${element}`}>
      <div className="djinn-card-wrapper">
        {djinnToRender}
      </div>
    </section>
  );
};

DjinnContainer.propTypes = propTypes;

export default DjinnContainer;