// let number = 59;
// number = 79;
// number = 119;
// console.log(number);
// const name = 'Asad';
// // name = 'jakir'    //error
// // console.log(name);
// var marks = [89,97,89,68,94];
// for (let i = 0; i < marks.length; i++) {
//      const element = marks[i];
//      console.log(element);
    
// }
// console.log(number);

// function add(number1,number2) {
//     var total = number1 + number2;
//     return total;
// }
// var result = add(5,6);
// console.log(result);
// console.log(name);
// console.log(number);
// var result = add(43,76);
// console.log(result);

// function largestNumber() {
//     let element = marks[0];
//     for (let i = 0; i< marks.length; i++) {
//       if (element<marks[i]) {
//           element = marks[i];
//       }
//     }
//     return element;
// }
// var large = largestNumber(marks);
// console.log(large);

//function factorial(n) {
    // if (n==0) {
    //     return 1
    // }
    // else
    //     var result = n*factorial(n-1);
    // return result;
//     let element = 1;
//     for (let i = 1; i <=n; i++) {
//          element = element*i;
//     }
//     return element;
// }
// var value = factorial(6);
// console.log(value);

function animalCount(depth) {
    var animal = 0;
    if (depth<=10) {
        animal = 10*50;
    }
    else if (depth<=20) {
        var remaining = depth-10;
        var firstPart = 10*50;
        var secondPart = remaining*100;
        animal = firstPart + secondPart;
    }
    else{
        var remaining = depth-20;
        var firstPart = 10*50;
        var secondPart = 10*100;
        var thirdPart = remaining*300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}
var total = animalCount(45);
console.log("Number of animal is ",total);