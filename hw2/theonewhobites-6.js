/*
Task descr
https://www.codewars.com/kata/5839c48f0cf94640a20001d3
My codewars: https://www.codewars.com/users/DaraKolm
* */

//Mentor area
let arr = ['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'];
let arr2=['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'];

console.log(countPerimeter(arr));
console.log(countPerimeter(arr2));

//Work area
function countPerimeter(arr){
    let perimeter = 0;

    for(let i =0;i<arr.length;i++){
        for (let j=0;j<arr[i].length;j++){
            if(arr[i][j]==="X"){

                //check top side
                if(i===0){
                    perimeter++;
                }else {
                    if(arr[i-1][j]!=="X") perimeter++;
                }

                //check left side
                if(j===0){
                    perimeter++;
                }else{
                    if(arr[i][j-1]!=="X") perimeter++;
                }

                //check bottom side
                if(i===arr.length-1){
                    perimeter++;
                }else {
                    if(arr[i+1][j]!=="X") perimeter++;
                }

                //check right side
                if(j===arr[i].length-1){
                    perimeter++;
                }else{
                    if(arr[i][j+1]!=="X") perimeter++;
                }

                //console.log(perimeter);
            }
        }
    }

    return "Total land perimeter: "+perimeter;
}