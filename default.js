// function add (num1,num2){
//     const result = num1 + num2;
//     console.log(num1,num2,result);
//     return result;
// }
//  const sum = add(2,2);
//  console.log("the total is:",sum);


//default--> if value is not provided, take this as a default.
function add (num1=3,num2=4){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
 const sum = add();
 
