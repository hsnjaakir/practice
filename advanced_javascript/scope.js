let bonus = 20;
function sum(first, second) {
    let result = first + second + bonus;
    // console.log(bonus);
    if (result > 100) {
        var mood = 'Happy'
        mood = 'Fishy'
        mood = 'Funky'
        mood = 'Cranky'
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(45,83);
console.log(bonus);
// console.log(result);
console.log(output);
// var day = 'Friday';
// let day = 'Friday';
// const day = 'Friday';
console.log(day);  //It results undefined cause only the declaration of variable is hoisting on the top, not the assignment. Hoisting is applicable only for "var". The "const" &  the "let" are scope variable.
// const day = 'Friday';
// const day = 'Friday';
var day = 'Friday';
