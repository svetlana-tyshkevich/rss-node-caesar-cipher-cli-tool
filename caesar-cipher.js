const caesarCipher = (text, shift, action) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetLength = alphabet.length / 2;

  const codeShift = action === 'encode' ? shift : shift * -1;

  const getCipherSymbol = (symbol, codeShift) => {
    const index = alphabet.indexOf(symbol);

    if (index < 0) return symbol;
    else if (index < alphabetLength) {
      return alphabet[(index + codeShift) % alphabetLength];
    } else
      return alphabet[((index + codeShift) % alphabetLength) + alphabetLength];
  };

  return text
    .split('')
    .map((item) => getCipherSymbol(item, codeShift))
    .join('');
};

export default caesarCipher;
