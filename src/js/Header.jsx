import { Link } from 'react-router-dom';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Header = () => {
  return (
    <header className="djinn-header">
      <Link to="/">
        <img src={getImageSrcUrl('dark_dawn_logo')} alt="dark_dawn_logo"/>
      </Link>

      {/** add search component here */}

      <img className="golden-sun-icon" src={getImageSrcUrl('golden_sun_icon')} alt="golden_sun_icon"/>
    </header>
  );
};

export default Header;