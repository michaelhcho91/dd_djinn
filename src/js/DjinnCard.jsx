import { getGifSrcUrl, getPngSrcUrl } from '../resources/getMedia.js';

const DjinnCard = ({ djinn = {} }) => {
  const { id, name, description, effect } = djinn;

  if (id && name && description && effect) {
    return (
      <div className="djinn-card-container" key={id}>
        <div className="djinn-name">{name}</div>
        <div className="djinn-description">{description}</div>
        <img className="djinn-png" alt="name" src={getPngSrcUrl(name)} />
        <img className="djinn-gif" alt="name" src={getGifSrcUrl(name)} />
        <div className="djinn-effect">{effect}</div>
      </div>
    );
  }

  return null;
};

export default DjinnCard;