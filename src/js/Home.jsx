import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DjinnCanvas from './DjinnCanvas';
import { getImageSrcUrl } from '../resources/getMedia.js';

const Home = () => {
  useEffect(() => {
    const componentHeight = document.getElementById('home-container').clientHeight;
    DjinnCanvas.initialize(componentHeight);

    return () => {
      DjinnCanvas.reset();
    };
  });

  return (
    <section id="home-container" className="home-container">
      <img src={getImageSrcUrl('splash')} alt="splash" />
      <div className="nav-links">
        <Link key="venus" to="/venus" />
        <Link key="mars" to="/mars" />
        <Link key="jupiter" to="/jupiter" />
        <Link key="mercury" to="/mercury" />
      </div>
    </section>
  );
};

export default Home;