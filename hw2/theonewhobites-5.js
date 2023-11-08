/*
Task descr
https://www.codewars.com/kata/598638d7f3a2c489b2000030
My codewars: https://www.codewars.com/users/DaraKolm
Github: https://github.com/DaraKolm/DevSchool2023
* */

//Mentor area
const object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
}

const object2 = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}

console.log(getRootProperty(object, 9));//=> "one"

console.log(getRootProperty(object2, 250));//=> "r1n"
console.log(getRootProperty(object2, 116));//=> "fik"
console.log(getRootProperty(object2, 111));//=> "r1n"
console.log(getRootProperty(object2, 999));//=> null


//Work area
function getRootProperty(obj, number){
    let flag = false;
    for (const key in obj) {
        //if first layer value is not Array then dig
        if(!Array.isArray(obj[key])){
            if (dig(obj[key],number)){
                flag = true;
                return key;
            }
        }else{
            //if first layer value is array then check number
            if(obj[key].includes(number)){
                flag = true;
                return key;
            }
        }
    }
    //if nothing was found
    if(!flag) return null;
}


function dig (obj, number){

    if(Array.isArray(obj)) {
        /*  // replaced with ternar
        if(obj.includes(number)){
            return true;
        }else return false;*/
        return obj.includes(number)?true:false;

    }else {
        for (let l of Object.values(obj)) {
             if(dig(l,number)) return true;
        }
    }
}