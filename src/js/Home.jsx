import { Link } from 'react-router-dom';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Home = () => {
  return (
    <section className="home-container">
      <img src={getImageSrcUrl('splash')} alt="splash" />
      <div className="nav-links">
        <Link to="/venus">Venus</Link>
        <Link to="/mars">Mars</Link>
        <Link to="/jupiter">Jupiter</Link>
        <Link to="/mercury">Mercury</Link>
      </div>
    </section>
  );
};

export default Home;