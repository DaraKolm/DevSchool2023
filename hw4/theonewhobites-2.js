/*
My codewars: https://www.codewars.com/users/DaraKolm
Github: https://github.com/DaraKolm/DevSchool2023*/
/*Task 2 Vector class
https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4

 */
class Vector{
    vector = [];

    constructor(arr) {
        for (let arrElement of arr) {
            this.vector.push(arrElement);
        }
    }

    equals(b){
        if (b.vector.length===this.vector.length){
            for (let i=0;i<this.vector.length;i++) {
                if (this.vector[i]!==b.vector[i]) return false
            } return true
        }return false
    }
    toString(){
        return '('+this.vector.toString()+')';
    }

    add(b){
        if(this.vector.length!==b.vector.length) {
            throw new Error('Try two vectors THE SAME length');
        }
        else{
            let arr = [];
            for (let i=0;i<this.vector.length;i++){
                arr.push(this.vector[i]+b.vector[i]);
            }
            return new Vector(Array.from(arr));
        }
    }

    subtract(b){
        if(this.vector.length!==b.vector.length) {
            throw new Error('Try two vectors THE SAME length');
        }
        else{
            let arr = [];
            for (let i=0;i<this.vector.length;i++){
                arr.push(this.vector[i]-b.vector[i]);
            }
            return new Vector(Array.from(arr));
        }
    }

    dot(b){
        if(this.vector.length!==b.vector.length) {
            throw new Error('Try two vectors THE SAME length');
        }
        else{
            let sum=0;
            for (let i=0;i<this.vector.length;i++){
                sum+=this.vector[i]*b.vector[i];
            }
            return sum;
        }
    }

    norm(){
        let sum = 0;
        for (let el of this.vector) {
            sum+=el^2;
        }
        return Math.sqrt(sum);
    }
}

let a = new Vector([1, 2, 3]);

let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);
let d = new Vector([1, 2, 3]);


console.log(a.equals(b));
console.log(a.equals(c));
console.log(a.equals(d));

console.log(a.toString());

console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
