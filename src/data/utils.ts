export function nCr<T>(x: T[], r: number): T[] {
  const n = x.length;
  const clone = [...x];

  // pick r items from n randomly
  const result = [];
  for (let i = 0; i < r; i++) {
    const index = Math.floor(Math.random() * n);
    result.push(clone[index]);
    clone.splice(index, 1);
  }

  return result;
}

// shuffle array
export function shuffle<T>(x: T[]): T[] {
  const clone = [...x];
  const result = [];

  while (clone.length) {
    const index = Math.floor(Math.random() * clone.length);
    result.push(clone[index]);
    clone.splice(index, 1);
  }

  return result;
}
