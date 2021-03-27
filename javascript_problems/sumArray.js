// var marks=[74,85,34,89,47,07,24,87,94,77];
// console.log(marks.length);
// var max=0;
// for(i=0;i<marks.length;i++){
//         max = max + marks[i];
// }
// console.log("Maximum is ",max);
var marks=[74,85,34,89,47,07,24];
var num=[23,564,23,65,78,234,90,87];
function getArraysum(mark){
var max=0;
for(i=0;i<mark.length;i++){
        max = max + mark[i];
}
return max;
}
var result=getArraysum(num);
console.log("Sum is ", result);