function addNumber(num1,num2) {
    console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return arguments;
}
var result = addNumber(3,5,6,7,3);
console.log('Sum is: ',result);