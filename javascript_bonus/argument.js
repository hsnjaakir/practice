function getFullName (firstName, lastName) {
    var fullName = [];
    for (let i = 0; i < arguments.length; i++) {
        const Name = arguments[i];
        fullName = fullName +' '+ Name;
    }
    return fullName;
}
var result = getFullName('Jakir','jahid','jisan','Hosen');
console.log(result);