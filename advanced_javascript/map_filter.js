const number = [4,5,6,7,8,9];
// const square = [];
// const root = [];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result1 = element*element;
//     const result2 = Math.sqrt(element);
//     square.push(result1);
//     root.push(result2.toFixed(3));
// }
// console.log(root);
// console.log(square);

//map

// function square(element) {
//     return element*element;
// }
// const result = number.map(square);
// console.log(result);


// number.map(function square(element,index,array) {
//     console.log(element,index,array);
// })

// const square = element => element*element;
// const result = number.map(square);
// console.log(result);


const result = number.map(x=>x*x);
console.log(result);

//filter

const bigger = number.filter(x => x < 7)
// const bigger = [];
// function fh(x) {
//     for (let i = 0; i < x.length; i++) {
//         if (x[i]>5) {
//             bigger.push(x[i]);
//         } }
// }
// fh(number);
console.log(bigger);

//find

const smaller = number.find(x => x < 7)
console.log(smaller);