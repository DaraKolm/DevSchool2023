let mul3=3;
let mul5 = 5;
let mas = [];

function count(n){
    let res = 0;
    if(n>=0){
        for(i=0;i<n;i++){
            if(i%mul3===0 && i%mul5===0 ){
                res+=i;
                mas.push(i);//for listing suitable numbers
            }else if(i%mul3===0 || i%mul5===0){
                res+=i;
                mas.push(i);//for listing suitable numbers
            }
        }
    }
    return res;
}

console.log(count(25) + " all: "+mas);

/*
let check = 0;
mas.forEach(function (k){
    check+=k;
})
console.log(check);

 */