function isPrime(n){
    for(var i=2;i<n;i++){
        if(n%i==0)
        return "not prime";
    }
    return "prime";
}
var result = isPrime(78);
console.log(result);