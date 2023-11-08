/*Task descr
Your task is to make a function that can take any non-negative integer
as an argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
 */

//Mentor test area
let num=66789054;
console.log("Rearranged:  "+buildNum(optBubble(getDigits(num))));

//work area
function getDigits(num){
    let str=num.toString();
    let chars=[];
    for(i=0;i<str.length;i++){
        chars.push(str[i]);
    }
    console.log("Got digits: "+chars);
    return chars;
}
function buildNum(chars){
    let str="";
    for(i=0;i<chars.length;i++){
        str+=chars[i];
    }
    return parseInt(str);
}

function optBubble(mas){
    let temp;
    let bool;
    for(i=0;i<mas.length;i++){
        bool=false;
        for(j=0;j<mas.length-i-1;j++){
            if(mas[j]<mas[j+1]){
                bool = true;
                temp = mas[j+1];
                mas[j+1]=mas[j];
                mas[j]=temp;
            }
        }
        if(!bool){
            return mas;
        }
    }
}