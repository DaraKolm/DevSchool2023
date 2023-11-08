/*
Task descr
https://www.codewars.com/kata/5fa6d9e9454977000fb0c1f8/javascript
My codewars: https://www.codewars.com/users/DaraKolm
* */

//Mentor area
let arr = [ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ];

console.log(unpack(arr));


//Work area
function unpack(arr){
    let seq = [];
    //get array of strings
    arr.forEach(item =>{item.forEach(it=>seq.push(it));});
    console.log(seq);

    //find every package with []
    seq=seq.filter(it=>it[it.length-1]===']'&&it[0]==='[');
    console.log(seq);

    //trim []
    seq=seq.map(item=>item.slice(1,item.length-1));
    console.log(seq);

    //isSausage? then keep
    let onlySaus=[];
    seq.forEach(item=>{
        if(isSausage(item)){
            onlySaus.push(item);
        }
    });
    console.log(onlySaus);

    //copy to new array all except 4, 9, 14 .... elem
    let stoleSaus=[];
    for (let i=0;i<onlySaus.length;i++){
        if((i+1)%5!==0) stoleSaus.push(onlySaus[i]);
    }

    console.log(stoleSaus);
    stoleSaus=stoleSaus.map(item=>item.split("").join(" "));

    return  stoleSaus.join(" ");
}

function isSausage(str){
    return (str.length === 4 && !str.split("").some(item => item !== str[0]));
}
