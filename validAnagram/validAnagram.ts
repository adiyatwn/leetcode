// Solution 1
function isAnagramSolution1(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const hashS = {};
  const hashT = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashS) {
      hashS[s[i]] += 1;
    } else {
      hashS[s[i]] = 0;
    }
    if (t[i] in hashT) {
      hashT[t[i]] += 1;
    } else {
      hashT[t[i]] = 0;
    }
  }

  for (const char in hashS) {
    if (hashS[char] !== hashT[char]) return false;
  }
  return true;
}

// Solution 2: on leetcode, this solution is slower than solution 1 and also takes more memory
function isAnagramSolution2(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
