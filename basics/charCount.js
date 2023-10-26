function charCount(str) {
  const result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    // faster than regex
    if (isAlphaNumeric(char)) {
      //   if (result[char] > 0) {
      //     result[char]++;
      //   } else {
      //     result[char] = 1;
      //   }

      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // 0-9
    !(code > 64 && code < 91) && // A=Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  }
  return true;
}

console.log(charCount('apple'));
