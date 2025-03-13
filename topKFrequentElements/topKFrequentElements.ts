function topKFrequent(nums: number[], k: number): number[] {
  const count: { [key: number]: number } = {};
  const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  for (const n in count) {
    freq[count[n]].push(parseInt(n));
  }

  const result: number[] = [];

  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      result.push(n);
      if (result.length === k) {
        return result;
      }
    }
  }
  return result;
}
