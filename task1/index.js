import fs from "fs";
import path from "path";

const read = fs.createReadStream('./input.txt', 'utf8');
const write = fs.createWriteStream('./output.txt', 'utf8');

read.pipe(write)

