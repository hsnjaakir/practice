var std1= {id:5008, name:"jakir", phone:9867};
var std2= {id:5009, name:"jonayed", phone:0225};
var std3= {id:5008, name:"riton", phone:9867};
console.log(std1);
console.log(std2);
console.log(std3);
//accessing property
var phoneNumber= ["phone"];
var phn=std1[phoneNumber];
var ph=std2["phone"];
var p=std3.phone;
console.log(phn);
console.log(ph);
console.log(p);
//updating property
std3.name="himel";
std2["name"]="asif";
var naMe="name";
std1[naMe]="arif";
std1.work="developer";
console.log(std1);
console.log(std2);
console.log(std3);

