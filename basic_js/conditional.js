var preferablePrice = 5;
if(preferablePrice<6){                          // > == <= >= !=
    console.log("Yes, I do");
}
else{
    console.log("No, I don't");
}
var getJob = true;
var savings = 100000;
if(getJob==true && savings>=200000){
    console.log("Yes, I can");
}
else if(getJob==true || savings>=200000){
    console.log("Loading");
}
else{
    console.log("No, I can't");
}