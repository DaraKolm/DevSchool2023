/* Task decription
Your task, is to calculate the minimal number of moves to win the game
"Towers of Hanoi", with given number of disks.

Towers of Hanoi is a simple game consisting of three rods, and a number
of disks of different sizes which can slide onto any rod. The puzzle
starts with the disks in a neat stack in ascending order of size on one
rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod,
obeying the following simple rules:

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and
placing it on top of another stack i.e. a disk can only be moved if it
is the uppermost disk on a stack.
No disk may be placed on top of a smaller disk.
* */
let numDisks = 8;//put number of disks here

function solve(num){
    let calc = 7;
    if(num<3){
        console.log("Tower must have 3 or more disks");
    }else{
        for(i=0;i<num-3;i++){
            calc=calc*2+1;
        }
    }
    return calc;
}

console.log(solve(numDisks));


/* was unnecessary making it harder

let numDiscs=3;
let sizeDiscs=[];
let stick1,stick2,stick3 = [];
//creating
for(i=0;i<numDiscs;i++){
    let str = "";
    for(j=0;j<=i;j++){
        str+="0";
    }
    sizeDiscs.push(str);
}

function printStick(s,stickNum){
    console.log("---stick "+stickNum);
    s.forEach(function (d){
        console.log(d);
    })
}
//printStick(sizeDiscs,1);
*/