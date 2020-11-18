import djinnData from './djinnData.json';

export const matchPathElement = (path) => {
  const elements = Object.keys(djinnData);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (path.includes(element)) return element;
  }
};