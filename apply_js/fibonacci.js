//using for loop
// var fibo=[0,1];
// for(var i=2; i<=15; i++){
//     fibo[i]= fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);
//using function
// var fibo=[0,1];
// function fibonacci(n){

//     for(var i=2; i<=n; i++){
//         fibo[i]= fibo[i-1]+fibo[i-2];
// }
//     return fibo;
// }
// var result = fibonacci(10);
// console.log(result);
//using recursive function for nth value
// function fibonacci(n){
//     if(n==0)
//         return 0;
//     if(n==1)
//         return 1;
//     else
//         return fibonacci(n-1)+fibonacci(n-2);
// }
// var result = fibonacci(6);
// console.log(result);
//using recursive for series
function fibonacci(n){
    if(n==0)
        return [0];
    if(n==1)
        return [0,1];
    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1]+fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(5);
console.log(result);