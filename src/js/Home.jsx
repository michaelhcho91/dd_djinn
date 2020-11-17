import { Link } from 'react-router-dom';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Home = () => {
  return (
    <section className="home-container">
      <img src={getImageSrcUrl('splash')} alt="splash" />
      <div className="nav-links">
        <Link key="venus" to="/venus">Venus</Link>
        <Link key="mars" to="/mars">Mars</Link>
        <Link key="jupiter" to="/jupiter">Jupiter</Link>
        <Link key="mercury" to="/mercury">Mercury</Link>
      </div>
    </section>
  );
};

export default Home;