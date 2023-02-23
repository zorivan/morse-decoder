const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const chars = {
    '10': '.',
    '11': '-',
    '0': ''
}

function decode(expr) {
  // write your solution here
  return expr
    .split("**********") // split string to words
    .map((word) => {
      return word
        .match(/.{10}/g) // split word to letters
        .reduce(
          (decodedWord, letter) =>
            (decodedWord +=
              MORSE_TABLE[
                letter
                  .replace(/^0+/g, "") // remove leading zeros
                  .replace(/10|11/g, (m) => chars[m])
              ]),
          ""
        );
    })
    .join(" ");
}

module.exports = {
    decode
}