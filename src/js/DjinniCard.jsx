import { getGifSrcUrl, getEntrySrcUrl } from '../resources/getMedia.js';

const DjinniCard = ({ djinni = {} }) => {
  const { id, name, description, effect } = djinni;

  if (id && name && description && effect) {
    return (
      <div className="djinn-card-container">
        <div className="djinn-name">{name}</div>
        <div className="djinn-description">{description}</div>
        <img className="djinn-png" alt="name" src={getEntrySrcUrl(name)} />
        <img className="djinn-gif" alt="name" src={getGifSrcUrl(name)} />
        <div className="djinn-effect">{effect}</div>
      </div>
    );
  }

  return null;
};

export default DjinniCard;