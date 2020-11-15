import { Link } from 'react-router-dom';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Jupiter = () => {
  return (
    <>
      <div>Jupiter Page</div>
      <Link to="/">Home</Link>
      <img src={getImageSrcUrl('jupiter_flying')} alt="jupiter_flying" />
    </>
  );
};

export default Jupiter;