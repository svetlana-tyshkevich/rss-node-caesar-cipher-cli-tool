import { program } from 'commander';
import path from 'path';
import fs from 'fs';

program
  .requiredOption('-s, --shift <type>', 'a shift')
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .requiredOption('-a, --action <type>', 'an action encode/decode');


  program.parse(process.argv);

  const options = program.opts();

  if (!options.action) {
      process.stderr.write('Set action.');
      process.exit(1);
  }

  if (!options.shift) {
    process.stderr.write('Set shift.');
    process.exit(1);
  }

  if (options.action !== 'encode' && options.action !== 'decode') {
    process.stderr.write('Action should be "encode" or "decode".');
    process.exit(1);
  }

  if (options.input && !fs.existsSync(options.input))  {
      process.stderr.write('Input file path is not correct.');
      process.exit(1);
  }

  if (options.output && !fs.existsSync(options.output)) {
    process.stderr.write('Output file path is not correct.');
    process.exit(1);
  }
  
  export default options;