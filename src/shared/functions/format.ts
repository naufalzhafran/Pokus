export const addZeroPadding = (val: number) => {
  return val < 10 ? `0${val}` : `${val}`;
};
