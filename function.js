function evenify(num){
    if(num % 2 == 0) {
        return num;
    }
    else{
       return num * 2;
    }
}
var result = evenify(5);
console.log('result', result)

function evenify_All(nums){
    const getDoubleArray = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = evenify(num);
        getDoubleArray.push(result);
    }
    return getDoubleArray;
}

const nums = [10, 13, 17, 18, 23]
const getArray_result = evenify_All(nums);
console.log(getArray_result)
