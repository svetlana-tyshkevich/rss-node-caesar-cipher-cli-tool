import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';

import CipherStr from './tranformStream.js';

const shift = 7;
const action = 'encode';

const readStr = fs.createReadStream('./input.txt', 'utf8');
const writeStr = fs.createWriteStream('./output.txt', 'utf8');
const cipherStr = new CipherStr(shift, action);

pipeline(readStr, cipherStr, writeStr,
  (error) => {
    if (error) {console.log(error)} 
    else { console.log('finished')}
  });
