const students = [
    {id:21, name:'jakir'},
    {id:42, name:'jahid'},
    {id:63, name:'jisan'}
]
// const newArray = [];
// for (let i = 0; i < students.length; i++) {
//     newArray.push(students[i].name)
// }
// console.log(newArray);

const names = students.map(student => student.name);
console.log(names);
const ids = students.filter(student => student.id > 40);
console.log(ids);
const isThere = students.find(student => student.id < 60);
console.log(isThere);
