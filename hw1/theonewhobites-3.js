/*Task descr
Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above will
have volume of (n−1)^3 and so on until the top which will have a volume
of 1^3.

You are given the total volume m of the building. Being given m can you
find the number n of cubes you will have to build?
The parameter of the function findNb (find_nb, find-nb, findNb, ...)
will be an integer m and you have to return the integer n such as n^3 +
(n-1)^3 + (n-2)^3 + ... + 1^3 = m if such a n exists or -1 if there is
no such n.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
 */
let totalVol = 1071225;//enter given volume


function findNumberOfCubes(volume){
    if(volume<1){
        console.log("Given volume must be at lest equal 1");
    }else{
        let res=0;
        let counterCubes = 0;
        do{
            counterCubes++;
            res=res+(counterCubes)**3;
            //console.log(res);
        }while (res<volume);
        if(res === totalVol){
            console.log("cubes:"+counterCubes+"   total volume:"+res);
        }else console.log("result: -1");
    }
}

findNumberOfCubes(totalVol);