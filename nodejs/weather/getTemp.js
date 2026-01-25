let degrees = 10;

export const getTemp = (min = -30, max = 50) => {
  const change = Math.random() < 0.5 ? -1 : 1;
  degrees += change;
  degrees = Math.max(min, Math.min(max, degrees));
  return degrees;
};
