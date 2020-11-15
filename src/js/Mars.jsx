import { Link } from 'react-router-dom';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Mars = () => {
  return (
    <>
      <div>Mars Page</div>
      <Link to="/">Home</Link>
      <img src={getImageSrcUrl('mars_flying')} alt="mars_flying" />
    </>
  );
};

export default Mars;