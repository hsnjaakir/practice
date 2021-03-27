function addTodo(task) {
    const newTaskElement = document.createElement('li')
}
 var name = 'Jakir';            //Global variable
function addUser() {
    console.log(name);
    var anotherName = 'Nazia';  //Local variable
    console.log(anotherName);
}
console.log(name);
addUser();

// (function () {               //Immediately Invoked Function Expression(IIFE)
//     console.log(name);
//     var anotherName = 'Nazia';       
//     console.log(anotherName);
// })();

// const getArea = function (height,width) {                  //Function Expression
//     return height*width;
// }
// console.log(getArea(3,4));