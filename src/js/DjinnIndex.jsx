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

const DjinnIndex = ({ location }) => {
  const element = matchPathElement(location.pathname);
  useEffect(() => {
    const componentHeight = document.getElementById('djinn-index').clientHeight;
    DjinnCanvas.initialize(componentHeight, element);

    return () => {
      DjinnCanvas.reset();
    };
  });

  const djinnToRender = djinnData[element].djinn.map(djinni => {
    return (
      <DjinniCard djinni={djinni} key={djinni.id} />
    );
  });

  return (
    <section id="djinn-index" className={`djinn-index ${element}`}>
      <div className="djinn-card-wrapper">
        {djinnToRender}
      </div>
    </section>
  );
};

DjinnIndex.propTypes = propTypes;

export default DjinnIndex;