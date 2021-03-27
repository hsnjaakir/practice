var num=[34,12,56,78,98,34,12,34,78,89,56,54,76,88,11,1,5,15,98,88];
var uniqueNum=[];
for(i=0;i<num.length;i++){
    var element=num[i];
    var index=uniqueNum.indexOf(element);
    if(index==-1)
        uniqueNum.push(element);
}
console.log(uniqueNum);