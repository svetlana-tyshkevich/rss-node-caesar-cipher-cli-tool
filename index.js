import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';

import CipherStr from './transformStream.js';
import options from './inputData.js';
import { stdout } from 'process';

const readStr = options.input
  ? fs.createReadStream(options.input, 'utf8')
  : process.stdin;
const writeStr = options.output ? fs.createWriteStream(options.output, 'utf8') : stdout;
const cipherStr = new CipherStr(+options.shift, options.action);

pipeline(readStr, cipherStr, writeStr, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Encryption finished');
  }
});
