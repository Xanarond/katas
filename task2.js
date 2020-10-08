/*
function evenChars(string) {
  return  string.split('')
  // return  (string.length >= 100 || string.length <2) ? string.split('').replace('', "") : "invalid string"
}

console.log(evenChars('sds'))*/


/*
function findShort(s){
  return s.split(" ").sort(function(a,b){
    return a.length - b.length;
  }).shift().length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))*/

/*var message = "... --- ...";
var alphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ","
};
var messageConverted = [];

message.split("  ").map(function (word) {
    word.split(" ").map(function (letter) {
        messageConverted.push(alphabet[letter]);
    });
    messageConverted.push(" ");
});
console.log(messageConverted.join('').replace(/ +/g, ' ').trim().toUpperCase());
/!*console.log(messageConverted.replace(/\s+/g, ' ').trim())*!/
// console.log(messageConverted.join("").replace(/\s+/g, ' ').toUpperCase());*/


/*
function decodeMorse(morseCode) {
    var ref = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        "/": " ",
        "-·-·--": "!",
        "·-·-·-": ".",
        "--··--": ","
    };

    return morseCode.trim()
        .split(/  | /)
        .map( (code) => MORSE_CODE[code] || ' ')
        .join('');
}

console.log(decodeMorse())*/
