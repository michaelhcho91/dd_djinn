export const getGifSrc = (name) => {
  return `${process.env.PUBLIC_URL}/djinn/gifs/${name.toLowerCase()}.gif`;
};

export const getEntryPngSrc = (name) => {
  return `${process.env.PUBLIC_URL}/djinn/pngs/${name.toLowerCase()}_entry.png`;
};