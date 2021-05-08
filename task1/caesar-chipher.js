const caesarChiper = (text, shift) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetLength = alphabet.length / 2;
  // const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const getCipherSymbol = (symbol, shift) => {
    const index = alphabet.indexOf(symbol);
    if (index < 0) return symbol;
    else if (index < alphabetLength) {
      console.log(index + shift);
      return alphabet[(index + shift) % alphabetLength];
    } else return alphabet[((index + shift) % alphabetLength) + alphabetLength];
  };

  return text
    .split('')
    .map((item) => getCipherSymbol(item, shift))
    .join('');
};




