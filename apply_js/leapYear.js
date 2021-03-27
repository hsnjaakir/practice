function isleapYear(year){
if(year%400 == 0 || (year%4 == 0 && year%100 != 0)){
    return true;
}
else{
    return false;
}
}
const cheak = isleapYear(1700);
console.log(cheak);