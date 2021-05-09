import { program } from 'commander';

program
  .option('-s, --shift <type>', 'a shift')
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .option('-a, --action <type>', 'an action encode/decode');


  program.parse(process.argv);

  const options = program.opts();

  export default options;