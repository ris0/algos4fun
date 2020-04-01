var productExceptSelf = function(nums) {
    let res =[];
    nums.reduce((leftP, curr, i) => {
        res[i] = leftP;
        return leftP*curr;
    }, 1)
    nums.reduceRight((rightP, curr, i) => {
        res[i] *= rightP;
        return rightP*curr;
    }, 1)
    console.log(res)
};

productExceptSelf([1,2,3,4])

