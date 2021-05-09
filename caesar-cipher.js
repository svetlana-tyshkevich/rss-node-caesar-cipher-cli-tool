const caesarCipher = (text, shift) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetLength = alphabet.length / 2;
  // const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const getCipherSymbol = (symbol, shift, action) => {
    const index = alphabet.indexOf(symbol);
    const codeShift = action === 'encode' ? shift : -shift;
    if (index < 0) return symbol;
    else if (index < alphabetLength) {
      return alphabet[(index + codeShift) % alphabetLength];
    } else return alphabet[((index + codeShift) % alphabetLength) + alphabetLength];
  };

  return text
    .split('')
    .map((item) => getCipherSymbol(item, shift))
    .join('');
};

export default caesarCipher;


