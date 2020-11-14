export const getGifSrcUrl = (name) => {
  return `${process.env.PUBLIC_URL}/djinn/gifs/${name.toLowerCase()}.gif`;
};

export const getPngSrcUrl = (name) => {
  return `${process.env.PUBLIC_URL}/djinn/pngs/${name.toLowerCase()}_entry.png`;
};