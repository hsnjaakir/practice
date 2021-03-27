//method 1
// var a = 7;
// var b = 5;
// console.log("before swap a= ", a, ",","b= ", b );
// var temp;
// temp=a;
// a=b;
// b=temp;
// console.log("after swap a= ", a, ",","b= ", b );
//method 2
// var x = 7;
// var y = 5;
// console.log("before swap x= ", x, ",","y= ", y );
// x=x+y;
// y=x-y;
// x=x-y;
// console.log("after swap x= ", x, ",","y= ", y );
//method 3
var p=7;
var q=5;
console.log("before swap p= ", p, ",","q= ", q );
[p,q]=[q,p];
console.log("after swap p= ", p, ",","q= ", q );

