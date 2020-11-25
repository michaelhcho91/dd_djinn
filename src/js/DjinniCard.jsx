import React from 'react';
import PropTypes from 'prop-types';
import { getGifSrcUrl, getEntrySrcUrl } from '../resources/getMedia.js';

const propTypes = {
  djinni: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    effect: PropTypes.string
  })
};

const DjinniCard = ({ djinni = {} }) => {
  const { id, name, description, effect } = djinni;

  if (id && name && description && effect) {
    return (
      <div className="djinni-card-container">
        <div className="djinni-name">{name}</div>
        <div className="djinni-description">{description}</div>
        <img className="djinni-png" alt={name} src={getEntrySrcUrl(name)} />
        <img className="djinni-gif" alt={name} src={getGifSrcUrl(name)} />
        <div className="djinni-effect">{effect}</div>
      </div>
    );
  }

  return null;
};

DjinniCard.propTypes = propTypes;

export default DjinniCard;