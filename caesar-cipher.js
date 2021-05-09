const caesarCipher = (text, shift, action) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetLength = alphabet.length / 2;

  const codeShift = action === 'encode' ? shift : shift * -1;

  const getCipherSymbol = (symbol, codeShift) => {
    const index = alphabet.indexOf(symbol);

    if (index < 0) return symbol;
    else {
      const cipherSymbolIndex = (index + codeShift) % alphabetLength;
      if (index < alphabetLength) {
      return cipherSymbolIndex >= 0
        ? alphabet[cipherSymbolIndex]
        : alphabet[alphabetLength + cipherSymbolIndex];
    } else
      return cipherSymbolIndex >= 0
        ? alphabet[cipherSymbolIndex + alphabetLength]
        : alphabet[2 * alphabetLength + cipherSymbolIndex];
  };}

  return text
    .split('')
    .map((item) => getCipherSymbol(item, codeShift))
    .join('');
};

export default caesarCipher;
