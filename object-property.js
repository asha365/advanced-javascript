const students = [
    {id:32, name: 'asha afrin'},
    {id:44, name: 'rafiya jannat'},
    {id: 20, name: 'rafi'},
    {id: 40, name: 'shakil'}

];
const names = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id > 30);
const biggerOne = students.find(s => s.id > 30);
console.log(biggerOne);