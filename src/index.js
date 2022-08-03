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

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}


function splitNChars(txt, num) {
    const result = [];
    for (let i = 0; i < txt.length; i += num) {
      result.push(txt.substr(i, num));
    }
    return result;
  }

function decode(expr) {
    const ArreySlice = sliceIntoChunks(expr, 10);    
    const divideByTwo = [];
    ArreySlice.forEach(el => {   
        return divideByTwo.push(splitNChars(el, 2))
    })
    const morseCode = divideByTwo.map(divideByTwoElem => {
        morse = []; 
        divideByTwoElem.forEach(el => {        
        if (el == 10) morse.push('.')
        if (el == 11) morse.push('-') 
        })
        return morse.join('')
    })  
    return morseCode .map( a => a.split(' ')      
            .map(  b => { if (b === '') return ' '         
                        return MORSE_TABLE[b] }).join('') ).join('') ;            

};
     
module.exports = {
    decode
}