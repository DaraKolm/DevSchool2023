/*
Task descr
https://www.codewars.com/kata/537400e773076324ab000262/javascript
My codewars: https://www.codewars.com/users/DaraKolm
* */

//Mentor area
let arr = ["tsar", "rat", "tar", "star", "tars", "cheese"];

//groupAnagramsSet is faster, so I sent it to codewars, but kept
// here both variants :З
console.log("------using Map");
t0 = performance.now();
console.log(groupAnagramsMap(arr));
t1 = performance.now();
console.log(`Map time taken:  ${t1-t0} ms`);

console.log("------using Set");
t0 = performance.now();
console.log(groupAnagramsSet(arr));//this one
t1 = performance.now();
console.log(`Set time taken:  ${t1-t0} ms`);




//Work area
//Faster one
function groupAnagramsSet(arr){

    let set = new Set();
    //get unique sorted key (rat => atr, tar => atr)
    for (let str of arr){
        set.add(str.split("").sort().join(""));
        //console.log(map);
    }

    console.log("Unique keys: ");
    console.log(set);

    let setAnagrams = new Set();
    for (let i of set.values()){
        setAnagrams.add(arr.filter(item=>item.split("").sort().join("")===i));
        //console.log("2: "+ setAnagrams.values());
    }

    console.log("Grouped (set) anagrams: ");
    return Array.from(setAnagrams.values());
}


//Slower one
function groupAnagramsMap(arr){

    let map = new Map();

    //get unique sorted key (rat => atr, tar => atr)
    for (let str of arr){
        let sorted = str.split("").sort().join("");
        map.set(sorted,str);
        //console.log(map);
    }

    console.log("Unique keys: ");
    console.log(map);
    let mapAnagrams = new Map();
    for (let i of map.keys()){
       mapAnagrams.set(i,arr.filter(item=>item.split("").sort().join("")===i));
    //console.log(mapAnagrams);
    }

    console.log("Grouped (map) anagrams: ");
    return Array.from(mapAnagrams.values());
}



