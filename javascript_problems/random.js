var num = 3.5416
// var result1 = Math.round(num);
// var result2 = Math.ceil(num);
// var result3 = Math.floor(num);
// console.log(result1,result2,result3);
for(i=0;i<10;i++){
    var dice = Math.random(num)*6;
    var randomNumber = Math.round(dice);
    console.log(randomNumber);
}