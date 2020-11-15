import { Link } from 'react-router-dom';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Mercury = () => {
  return (
    <>
      <div>Mercury Page</div>
      <Link to="/">Home</Link>
      <img src={getImageSrcUrl('mercury_flying')} alt="mercury_flying" />
    </>
  );
};

export default Mercury;