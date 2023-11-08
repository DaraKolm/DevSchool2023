/*
* In this little assignment you are given a string of space separated
numbers, and have to return the highest and lowest number.

Examples:
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and
highest number is first.
* */

//Mentor test area
let str = "125 4935 26 -534 592 283";
let mas = getNumbers(str);
optBubble(mas);
let res = mas[0]+" "+mas[mas.length-1];
console.log("Max and min: "+res);




//work area
function getNumbers(str){
    let masStr = str.split(" ");
    let mas = [];
    for (i=0;i<masStr.length;i++){
        mas[i]=parseInt(masStr[i]);
    }
    console.log(mas);
    return mas;
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
            console.log("optBubble result: " +mas);
            return;
        }
    }
}


function Bubble(mas){
    let temp;
    for(i=0;i<mas.length;i++){
        for(j=0;j<mas.length-i-1;j++){
            if(mas[j]<mas[j+1]){
                temp = mas[j+1];
                mas[j+1]=mas[j];
                mas[j]=temp;
            }
        }
    }
    console.log("Simple bubble result: " +mas);
}

function mySort(mas){
    let temp;
    for(i=0;i<mas.length;i++){
        for(j=0;j<mas.length;j++){
            if(mas[i]>mas[j]){
                temp = mas[i];
                mas[i]=mas[j];
                mas[j]=temp;
            }
        }
    }
    console.log("mySort result: " +mas);
}


//tested sorts,
/*let mas = getNumbers(str);
let mas2 = getNumbers(str);
let mas3=getNumbers(str);

t0 = performance.now();
Bubble(mas);
t1 = performance.now();
console.log(`Simple bubble time:  ${t1-t0} ms`);

t0 = performance.now();
mySort(mas2);
t1 = performance.now();
console.log(`mySort time:  ${t1-t0} ms`);

t0 = performance.now();
optBubble(mas3);
t1 = performance.now();
console.log(`optBubble time:  ${t1-t0} ms`);
*/
