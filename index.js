import fs from 'fs';
import path from 'path';
import { pipeline, Transform } from 'stream';

import caesarCipher from './caesar-cipher.js';

const readStr = fs.createReadStream('./input.txt', 'utf8');
const writeStr = fs.createWriteStream('./output.txt', 'utf8');

const shift = 7;
const action = 'encode';

class CipherStr extends Transform {
  constructor(shift, action) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(chunk, enc, cb) {
    console.log(chunk.toString());
    // caesarCipher(chunk, this.shift, this.action);
    try {
      const cipherText = caesarCipher(chunk.toString(), this.shift, this.action);
      cb(null, cipherText);
    } catch (err) {
      cb(err);
    }
  }
}

const cipherStr = new CipherStr(shift, action);

pipeline(readStr, cipherStr, writeStr,
  (error) => {
    if (error) {console.log(error)} 
    else { console.log('finished')}
  });
