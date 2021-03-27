var marks=[74,85,34,89,47,07,24,87,94,77];
console.log(marks.length);
var max=marks[0];
for(i=0;i<marks.length;i++){
    if(marks[i]>max)
        max=marks[i];
}
console.log("Maximum is ",max);