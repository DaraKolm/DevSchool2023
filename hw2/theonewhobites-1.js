/*
Task descr
https://www.codewars.com/kata/64edf7ab2b610b16c2067579
My codewars: https://www.codewars.com/users/DaraKolm
* */

//Mentor area
let honor=[1,5,6,3,4,2];
let d=3; // 1 to 31


//Work area
let sum =(honor,d)=>{
    if(honor.length<=0 || d>31 || d<1){
        console.log("Check your input. Honor must have at least 1 person and d must be from 1 to 31");
    }
    else{
        let space = honor.length/d;
        let sum = [];
        for (let i = 0; i<space;i++){
            sum[i]=0;
            for(let j=i;j<honor.length;j+=space){
                sum[i]+=honor[j];
            }
        }
        console.log("All sums for possible groups: "+sum);
        //finding biggest sum
        let pos = sum.indexOf(Math.max(...sum));
        console.log("Start position of leaders is "+pos);
        console.log("Every "+space+" person is a leader");
        console.log("Combined honor of the d leaders of the Council is "+sum[pos]);
        return sum[pos];
    }
}

sum(honor,d);
