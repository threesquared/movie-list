export const truncate = (str: string, max: number = 30): string => {
  const array = str.trim().split(' ');
  const ellipsis = array.length > max ? '...' : '';

  return array.slice(0, max).join(' ') + ellipsis;
};

export const sortRand = <T>(arr: T[]): T[] => arr.sort(() => Math.random() - 0.5)
