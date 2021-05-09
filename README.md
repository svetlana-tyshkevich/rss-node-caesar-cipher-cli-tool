## Caesar cipher CLI tool

#### Install

1. Clone the repository  ` git clone git@github.com:svetlana-tyshkevich/rss-node-caesar-cipher-cli-tool.git`.
2. Install all dependencies `npm i`

#### Usage

CLI tool should accept 4 options (short alias and full name):

1. -s, --shift: a shift
2. -i, --input: an input file
3. -o, --output: an output file
4. -a, --action: an action encode/decode

**Usage example:**

1. -a (--action) is encode
`$ node index -a encode -s 7 -i "./input.txt" -o "./output.txt"`

2. -a (--action) is decode
*Decoding encoded initial string with the same -s(--shift) number produces the initial string.*
`$ node index --action decode --shift 7 --input input.txt --output output.txt`

3. (Optional) Negative shift handling
`$ node index --action encode --shift -1 --input input.txt --output output.txt`

4. Input file not specified 
`$ node index -a encode -s 7 -o "./output.txt"`

5. Output file not specified 
`$ node index -a encode -s 7 -i "./input.txt"`

