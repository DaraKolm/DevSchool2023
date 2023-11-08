/* Task descr
link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047
My codewars: https://www.codewars.com/users/DaraKolm
*/
//Mentor area
let arr = [20,10,-80,10,10,15,35]; //0 < arr < 1000

//Work area
function findLowerEvenIndex(arr){
    let index = -1;

    let sum = 0;
    arr.forEach(el=>sum+=el);
    sum = arr.reduce ((f,s)=>f+s,0);
    sum=sum-arr[0];

    if(sum === 0){
        index=0;
        console.log("Sum of array is 0, so index is "+index);
    }else{
        let sumLeft = 0;
        for (let i=0;i<arr.length;i++){
            let sumRight=0;
            sumLeft+=arr[i];
            for (let j=i+2;j<arr.length;j++){
                sumRight+=arr[j]
            }
            //console.log("index: "+(i+1)+" sumLeft: "+sumLeft + " sumRight: "+sumRight);
            if(sumRight===sumLeft) {
                index=i+1;
                break;
            }
        }
    }
    return index;
}//        console.log("i: "+i+" sumLeft: "+sumLeft);


console.log("index: "+findLowerEvenIndex(arr));