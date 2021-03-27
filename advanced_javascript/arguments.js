function add(num1,num2) {
    let total = 0;
    const likeArray = [...arguments];               //arguments is an array like object, but not an array. So we don't apply any functionalities like 'map','filter','find' on it. That's why we converted it to an array.
    console.log(likeArray);
    for (let i = 0; i < likeArray.length; i++) {
        total = total + likeArray[i];
    }
    return total;
}
const result = add(2,3,5,9);
console.log(result);