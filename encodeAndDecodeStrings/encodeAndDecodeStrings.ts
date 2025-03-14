function encode(strs: string[]): string {
  let result = "";

  for (const str of strs) {
    result += `${str.length}#${str}`;
  }
  return result;
}

function decode(str: string): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const length = parseInt(str.slice(i, j));
    result.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return result;
}
