var user = 'jakir';
function add(num1,num2) {
    result = num1 + num2;
    console.log('Result inside', result);
    console.log('Name inside', user);
    function double(num) {
        return num * 2
    }
    var total = double(result);
    return total;
}
console.log('Name outside', user);
var sum = add(45,43);
console.log(sum);
console.log('Result outside', result);