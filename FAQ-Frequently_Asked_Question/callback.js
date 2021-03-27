function explain_callback(name,age,task) {
    task();
    console.log(name);
    console.log(age);
}
function washHand() {
    console.log('Wash hands with soap');
}
function takeShower() {
    console.log('Take a bath');
}
function scrollFacebook() {
    console.log("Don't scroll Facebook");
}
explain_callback('jakir',26,takeShower);
explain_callback('jahid',19,washHand);
explain_callback('Jisan',15,scrollFacebook);