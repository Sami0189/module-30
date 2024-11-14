/***
 * var:no reason to use it
 * let:allow it to reassign
 * const:do not allow to reassign
 */

const money = 34;
//money=30;
const rich = money + 43;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count)

const numbers= [23,4,23,12,56];
//numbers = [1,32,43,54];  //not allow
numbers[1]=55;             //allow it
numbers.push(1,2,3,4,5);
console.log(numbers)



//object
const student={
    name:'sami',
    class:12
}
//student={name:'who'}   //not allow

//student[0]='who are';   //avaba lakha java na
student.name='who are'
console.log(student)

//loop
let sum=0;
for(let i=0; i<10;i++){
 sum = sum + i;
}
console.log(sum);