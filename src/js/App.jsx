import { useState, useEffect } from 'react';
import djinn from '../resources/djinn.json';
import { getGifSrc, getEntryPngSrc } from '../resources/getMedia.js';
import '../styles/App.scss';

const App = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count + 1);

  useEffect(() => {
    // Perform side effects here to be called after each render including the first.
    console.log(djinn);

    return () => {
      // Return a clean up function to be called on component unmount.
      console.log('cleaning up');
    }
  })

  let totalCount = 0;
  const elements = Object.keys(djinn);
  elements.forEach(element => {
    totalCount += djinn[element].djinn.length;
  });

  return (
    <>
      <div>
        {`Dark Dawn Djinn Guide: ${totalCount} Djinn`}
      </div>
      <img alt="bark" src={getEntryPngSrc('bark')} />
      <img alt="bark" src={getGifSrc('bark')} />
    </>
  );
}

export default App;
