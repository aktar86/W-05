function getSum (num, num2){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        let number = arguments[i];
        sum = sum + number;
        
    }
    return sum - 5;
}
let result = getSum(5, 7, 5, 8, 3, 6,4, 5, 8, 41, 13);
console.log(result)