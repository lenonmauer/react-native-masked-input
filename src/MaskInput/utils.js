export const applyMask = (value = '', mask) => {
  let newStr = '';
  const maskLength = mask.length;
  const valueChars = value
    .replace(/\D/g, '')
    .substr(0, maskLength)
    .split('');
  const maskChars = mask.split('');

  for (let i = 0, k = 0; i < maskLength; i++) {
    const char = valueChars[k];
    const maskChar = maskChars[i];

    if (!char) {
      break;
    }

    if (maskChar === '#' && /\d/.test(char)) {
      newStr += char;
      k++;
    } else {
      newStr += maskChar;
    }
  }

  return newStr;
};
