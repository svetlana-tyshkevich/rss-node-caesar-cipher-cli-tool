import { Transform } from 'stream';

import caesarCipher from './caesar-cipher.js';

 export default class CipherStr extends Transform {
  constructor(shift, action) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(chunk, enc, cb) {
    try {
      const cipherText = caesarCipher(
        chunk.toString(),
        this.shift,
        this.action,
      );
      cb(null, cipherText);
    } catch (error) {
      cb(error);
    }
  }
}

