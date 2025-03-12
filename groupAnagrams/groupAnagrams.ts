function groupAnagrams(strs: string[]): string[][] {
  const result = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let c of str) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    const key = count.join(",");
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(str);
  }

  return Object.values(result);
}
