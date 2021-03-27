var friendAge = [22,23,24,25,27,28];
console.log(friendAge);
var friendAge = [22,23,24,25,27,28];
var jakirAge = friendAge[4];
console.log(jakirAge);
var friendAge = [22,23,24,25,27,28];
friendAge[0]= 20;                               //updation
var naziaAge = friendAge[0];
console.log(naziaAge);
var position = friendAge.indexOf(28);
console.log(position);
console.log(friendAge);
console.log(friendAge.length);
friendAge.push(30);                             //push in the end
console.log(friendAge);
console.log(friendAge.length);
friendAge.pop();                                //pop from the end
console.log(friendAge);
console.log(friendAge.length);
var pipeLine = ['salam','kalam','balam','jamal','karim','Rahim'];
pipeLine.unshift('Abul');                       //push in the beggining
console.log(pipeLine);
console.log(pipeLine.length);
pipeLine.shift();                              //pop from the beggining
console.log(pipeLine);
console.log(pipeLine.length);
var part1 = pipeLine.slice(1);
console.log(part1)
var part2 = pipeLine.slice(1,4);
console.log(part2);
console.log(pipeLine);