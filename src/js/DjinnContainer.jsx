import djinn from '../resources/djinn.json';
import DjinniCard from './DjinniCard';

const DjinnContainer = ({ location }) => {
  const elements = Object.keys(djinn);
  let element = '';
  for (let i = 0; i < elements.length; i++) {
    if (location.pathname.includes(elements[i])) element = elements[i];
  }

  const djinnToRender = djinn[element].djinn.map(djinni => {
    return (
      <DjinniCard djinni={djinni} key={djinni.id} />
    );
  })

  return (
    <section className={`djinn-container ${element}`}>
      {djinnToRender}
    </section>
  );
};

export default DjinnContainer;