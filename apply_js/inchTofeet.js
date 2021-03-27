function inchTofeet(inch){
    var feet = inch/12;
    return feet;
}

var height=[60,80,120];
for(var i=1;i<=height.length;i++){
    var person = inchTofeet(height[i-1]);
    console.log(person);
}