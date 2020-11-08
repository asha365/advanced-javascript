const numbers = [2, 4, 5, 6, 8, 10, 20];

// const output = [];
// for(let i = 0; i <numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }


 //map
//  function square (element){
//     return element * element;
//  }
//  numbers.map(square)
// console.log(output); 


//map
//  numbers.map(function square (element){
//     return element * element;
//  })
//  //numbers.map(function(element,index,array){
//  const result = numbers.map(function(element){
//      //console.log(element,index,array); 
//      return element * element 
//  })
// console.log(result);




//using arrow function
// numbers.map(function square (element){
//     return element * element;
    
//  })

//  const square = element => element * element;
//  const square = x => x * x;
  
//  const result = numbers.map(function(element){
//      return element * element 
//  })

//  const result = numbers.map(x => x * x);
// console.log(result);



//filter
const bigger = numbers.filter(x => x>5);
const itThere = numbers.find(x => x >5);
console.log(itThere);