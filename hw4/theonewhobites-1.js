/*
My codewars: https://www.codewars.com/users/DaraKolm
Github: https://github.com/DaraKolm/DevSchool2023*/
/*Task 1 Vigenere Cipher
https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3
It encodes like resultLetterIndex = (A+B)mod M
where
 - M is a size of alphabet used. For English - 26
 - A(Pi) is an index of message letter from 0 to M
 - B (Kj) is index from 0 to M of key letter, which represents

It decodes like resultLetterIndex = ( A(Pi) + M - B(Kj) ) mod M

If message longer than key, key gets repeated
For this kata, this way is approved in decsription:
    "my secret code i want to secure"  // message
    "passwordpasswordpasswordpasswor"  // key


Example
var alphabet = 'abcdefghijklmnopqrstuvwxyz'; // m=26
var key = 'password';

var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
//How c turns into r:
//A = 2 (code of c) + B = 15 (code of p, which represents c in key) => 2+15=17
//17 mod M(=26) => 17 is an index of r from alphabet

c.decode('laxxhsj');  // returns 'waffles'
//How l turns into w
//( A=11 + M=26 - B=15 ) mod 26 = 22 mod 26 = 22 => w

 */

class VigenèreCipher{
    key;
    alphabet;

    constructor(key, alphabet) {
        this.key=key;
        this.alphabet=alphabet;
    };
    encode(message){
        let encodedLine = "";
        let letterIndex = 0;//номер букви в шифрі
        for (let letter of message) {
            if (this.alphabet.includes(letter)){
                //let letterIndex = message.indexOf(letter);//номер букви в тексті
                let keyIndex = letterIndex % this.key.length;//номер букви в ключі
                let indexA = this.alphabet.indexOf(letter);//номер букви текста в алфавіті
                let indexB = this.alphabet.indexOf(this.key[keyIndex]);//номер букви ключа в алфавіті

                let resultIndex = (indexA + indexB) % this.alphabet.length;
                encodedLine = encodedLine + this.alphabet[resultIndex];
            }else encodedLine = encodedLine + letter;

            letterIndex++;
        }
        return encodedLine;
    }

    decode(cipher){
        let decodedLine = "";
        let letterIndex = 0;//номер букви в шифрі
        for (let letter of cipher) {
            if (this.alphabet.includes(letter)){
                //let letterIndex = cipher.indexOf(letter);//номер букви в шифрі
                let keyIndex = letterIndex % this.key.length;//номер букви в ключі

                let indexA = this.alphabet.indexOf(letter);//номер букви шифра в алфавіті
                let indexB = this.alphabet.indexOf(this.key[keyIndex]);//номер букви ключа в алфавіті
                console.log(`\n-----letter = ${letter}\nномер букви в шифрі = ${letterIndex}\nномер букви в ключі = ${keyIndex}\n`);
                console.log(`номер букви шифра в алфавіті = ${indexA}\nномер букви ключа в алфавіті = ${indexB}\n`);

                let resultIndex = (indexA + this.alphabet.length - indexB) % this.alphabet.length;
                console.log(`resultIndex = ${resultIndex}\nresult letter = ${this.alphabet[resultIndex]}`);
                decodedLine = decodedLine + this.alphabet[resultIndex];
            }else decodedLine = decodedLine + letter;

            letterIndex++;
        }
        return decodedLine;
    }
}


//Test area
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = 'password';
let c = new VigenèreCipher(key, alphabet);

//console.log("Encoded:\ncodewars = " +c.encode('codewars'));//returns 'rovwsoiv'
//console.log("CODEWARS = "+ c.encode('CODEWARS'));//returns 'CODEWARS'
//console.log("Decoded:\nlaxxhsj = "+ c.decode('laxxhsj'));//returns 'waffles'
console.log("rovwsoiv="+c.decode("rovwsoiv"));//codewars
//console.log("rovwsoiv="+c.encode("rovwsoiv"));