var string ="Hello, how are you?"
function revString(str){
    var revrse = "";
    for(var i=0;i<str.length;i++){
    var char = str[i];
    revrse = char+revrse;
    }
    return revrse;    
}
var output=revString(string);
console.log(output);