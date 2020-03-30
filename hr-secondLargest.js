function getSecondLargest(nums) {
    const maxObject = nums.reduce((acc, curr) => {
        return {
            max: Math.max(acc.max, curr),
            secondMax: curr > acc.max ? acc.max : 
                (curr === acc.max ? acc.secondMax : Math.max(acc.secondMax, curr))
        };
    }, {max: -1000, secondMax: 0});

    //console.log('secondMax: ' + maxObject.secondMax);
    return maxObject.secondMax;
}

module.exports = getSecondLargest;
