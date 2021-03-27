// const nums = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i]>5) {
//         break;                               //get out from loop, if true
//     }
//     console.log(nums[i]);
// }
const nums = [1,2,-3,4,-5,6,7,-8,9];
for (let i = 0; i < nums.length; i++) {
    if (nums[i]<6) {
        continue;                              //skip, if true
    }
    console.log(nums[i]);
}