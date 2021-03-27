var sentence="It's  Jakir Hosen, he wanna be a web developer.";
var count=0;
for(i=0;i<sentence.length;i++){
    if(sentence[i]==" " && sentence[i-1]!=" ")
        count++;
}
count++;
console.log(count);