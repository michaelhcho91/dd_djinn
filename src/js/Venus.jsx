import { Link } from 'react-router-dom';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Venus = () => {
  return (
    <>
      <div>Venus Page</div>
      <Link to="/">Home</Link>
      <img src={getImageSrcUrl('venus_flying')} alt="venus_flying" />
    </>
  );
};

export default Venus;