class Person {
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const ordineryPerson = new Person('Jakir','Hosen','20000');
console.log(ordineryPerson);
const heroPerson = new Person('Jahid','Hasan','25000');
console.log(heroPerson);

// function OldPerson(firstName,lastName,salary) {                   //Old model of class
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }

// const grandPappa = new OldPerson('Fazlul','Karim',1200);
// console.log(grandPappa);