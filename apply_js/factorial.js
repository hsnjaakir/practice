//usin for loop
// const num = 10;
// var factorial=1;
// for(var i=1;i<=num;i++){
//     factorial = factorial*i;
//     console.log(i,factorial);
// }
//using fuction
// function factorial(num){
//     var factorial =1;
//     for(i=1;i<=num;i++){
//         factorial=factorial*i;
//     }
//     return factorial;
// }
//  var result = factorial(5);
//  console.log(result);
//using while loop
//var i=1;
// var factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);
function factorial(n){
    if(n==0)
        return 1;
    else
        return n*factorial(n-1);
}
var jak = factorial(10);
console.log(jak);