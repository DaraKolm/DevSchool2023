/*Task descr
Define a function that takes an integer argument and returns a logical
value true or false depending on if the integer is a prime.
Per Wikipedia, a prime number ( or a prime ) is a natural number greater
than 1 that has no positive divisors other than 1 and itself.
Requirements:
- You can assume you will be given an integer input.
- You can not assume that the integer will be only positive. You may be
given negative numbers as well ( or 0 ).
- NOTE on performance: There are no fancy optimizations required, but
still the most trivial solutions might time out. Numbers go up to 2^31 (
or similar, depending on language ). Looping all the way up to n, or
n/2, will be too slow.

Example:
is_prime(1) // false
is_prime(2) //true
is_prime(-1) // false
 */
//Test area for mentors-------------------------------------------------------------------------------------------------
let givenNum;
//assign number
//givenNum=2835694756;   //not prime
givenNum = 1711371217;     // prime

let t0,t1;
console.log("\n ----Given number: "+givenNum);
t0 = performance.now();
console.log("Var1: is prime?:   "+ var1(givenNum));
t1 = performance.now();
console.log(`Var1 time taken:  ${t1-t0} ms`);

t0 = performance.now();
console.log("Trivial is prime?:   "+ is_prime_simple_2(givenNum));
t1 = performance.now();
console.log(`Trivial time taken:  ${t1-t0} ms`);


//------------------------------------------------------------------------------------------------------------------


// Variant 1. Makes sense to check the smaller dividers only.
// The amount of them will end at the b, where n=b**2. So we will check only those smaller than n**(0.5)
 function var1(n){
     if(n<=1){
         console.log("Given number must be bigger that 1 to be prime");
         return false;
     }else{
         let root = Math.round(Math.sqrt(n));
         for(i=2;i<=root;i++){
             if(n%i===0){
                 console.log("Var1: Found divider "+ i + " for number "+n);
                 return false;
             }
         }
         return true;
     }
 }



//to clear all differences that could reflect on time comparing to var1
function is_prime_simple_2(n){
    if(n<=1){
        console.log("Given number must be bigger that 1 to be prime");
        return false;
    }else{
        for(i=2;i<n;i++){
            if(n%i===0) {
                console.log("Trivial: Found divider "+ i + " for number "+n);
                return false;
            }
        }
        return true;
    }
}

// simple trivial check without checking for negatives
function is_prime_simple(n){
    for(i=2;i<n;i++){
        if(n%i===0) return false;
    }
    return true;
}





/* Var2, not done and messed up
let num=171131;
//console.log("Result: "+ checkBack_is_prime(num))
console.log("Given number:  "+num);
console.log("Is_prime_simple result: "+ is_prime_simple(num))
let pairs = split_in_pairs(num);
console.log("are_pairs_prime "+are_pairs_prime(pairs));
console.log("have_divider "+have_divider(pairs));*/

/*
function is_prime (n){
    if(n<=1){
        console.log("Given number must be bigger that 1 to be prime");
        return false;
    }else{
        if(n<1000){
           return is_prime_simple(n);
        }else if(n>=1000){
            return checkBack(n);
        }

    }
}






function checkLastDigit(n){
    let str="";
    str+=n;
    let lastDigit = parseInt(str.slice(str.length-1));
    console.log(lastDigit);
    return lastDigit;
}
function checkBack_is_prime(n){//it doesn't work like this

    let str="";
    str+=n;
    let lastDigits =0;
    let k=0;
    do{
        k++;
        lastDigits = parseInt(str.slice(str.length-k));
        console.log("lastDigits now: "+lastDigits);
        if(!is_prime_simple(lastDigits)) return false;
    }while(lastDigits!==n);
    return true;
}





function split_in_pairs(n){
    let pairs = [];
    let str="";
    str+=n;
    let pair =0;
    let k=0;
    if(str.length%2===0){
        let pair_prime=true;
        do{
            pair = parseInt(str.slice(str.length-k-2,str.length-k));
            console.log("split_in_pairs now: "+pair);
            pairs.push(pair);
            k+=2;
        }while(str.length-k!==0);
        return pairs;
    }
}


function are_pairs_prime(pairs){
    let counter_false = 0 ;
    for(i=0;i<pairs.length;i++){
        if(!is_prime_simple(pairs[i])){
            counter_false++;
        }
    }
    if(counter_false===0) return true;
    else return false;
}

function have_divider(pairs){
    let dividers = [];
    pairs.sort();
    for(i=0;i<pairs[pairs.length];i++){
        let fits=true;
        for (j=0;j<pairs.length;j++){
            if(pairs[j]%i!==0) fits=false;
        }
        if(fits) dividers.push(i);
    }
    if (dividers.length===0) return false
    else return true;
}
//console.log("Result: "+is_prime(givenNum));
//checkLastDigit(givenNum);
*/