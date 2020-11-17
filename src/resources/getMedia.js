/* eslint-disable no-undef */
export const getGifSrcUrl = (name) => {
  return `${process.env.PUBLIC_URL}/images/gifs/${name.toLowerCase()}.gif`;
};

export const getEntrySrcUrl = (name) => {
  return `${process.env.PUBLIC_URL}/images/entry/${name.toLowerCase()}_entry.png`;
};

export const getImageSrcUrl = (name) => {
  return `${process.env.PUBLIC_URL}/images/${name}.png`;
};