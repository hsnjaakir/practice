// function evenify_all(nums) {                                         //without using return
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num%2==0) {
//             console.log(num, ': is even');
//         }
//         else{
//             console.log(num, ': is odd');
//             console.log('Twice is: ', num*2);
//         }
//     }
// }

// var number = [23,45,42,76,98,56,43,15];
// var friends_age = [21,22,23,24,25,26,27];

// evenify_all(number);
// evenify_all(friends_age);

function evenify_all(nums) {                                        //using return
    var even = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num%2==0) {
            even.push(num);
        }
        else{
            even.push(num*2);
        }
    }
    return even;
}

var number = [23,45,42,76,98,56,43,15];
var friends_age = [21,22,23,24,25,26,27];

var result = evenify_all(number);
console.log(result);