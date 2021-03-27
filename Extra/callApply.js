const ordineryPerson = {
    firstName: 'Jakir',
    lastName: 'Hosen',
    salary: 50000,
    getFullName: function(){
        console.log(this.firstName , this.lastName)
    },
    billPaid: function(bill,tips,tax){
        console.log(this);
        this.salary = this.salary - bill - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Jahid',
    lastName: 'Hasan',
    salary: 60000

}

const ultraHeroPerson = {
    firstName: 'Jisanul',
    lastName: 'Hasan',
    salary: 100000

}


// console.log(ordineryPerson.firstName);
// console.log(ordineryPerson.lastName);
// const fullName = ordineryPerson.getFullName();
// console.log(fullName);
// ordineryPerson.billPaid(1000,100,50);
// console.log(ordineryPerson.salary);



// const heroChargebill = ordineryPerson.billPaid.bind(heroPerson);               //bind
// heroChargebill(30000,200,100);
// console.log(heroPerson.salary);

// const ultraHeroChargebill = ordineryPerson.billPaid.bind(ultraHeroPerson);
// ultraHeroChargebill(50000,300,100);
// console.log(ultraHeroPerson.salary);


//call

// ordineryPerson.billPaid.call(heroPerson,300,100,50);                    //call
// console.log(heroPerson.salary);
// ordineryPerson.billPaid.call(ultraHeroPerson,300,100,50);
// console.log(ultraHeroPerson.salary);
// console.log(ordineryPerson.salary);



ordineryPerson.billPaid.apply(heroPerson,[300,100,50]);                     //apply
console.log(heroPerson.salary);
ordineryPerson.billPaid.apply(ultraHeroPerson,[300,100,50]);
ordineryPerson.billPaid.apply(ultraHeroPerson,[30000,10000,50000]);
console.log(ultraHeroPerson.salary);
ordineryPerson.billPaid(7549,346,987);
console.log(ordineryPerson.salary);

