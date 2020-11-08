let bonus = 20;
function sum(first,second){
    let result = first + second + bonus;
    console.log(result);
    return result;

}
const output = sum(20,30);
console.log(bonus);
console.log(output);