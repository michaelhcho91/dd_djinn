import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Golden Sun Dark Dawn Djinn Guide</div>
      <img src={`${process.env.PUBLIC_URL}/djinn/splash.png`} />
      <Link to="/venus">Venus</Link>
      <Link to="/mercury">Mercury</Link>
      <Link to="/mars">Mars</Link>
      <Link to="/jupiter">Jupiter</Link>
    </>
  );
};

export default Home;