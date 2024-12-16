var findGCD = function(nums) {

    let maxNum = Math.max(...nums)
    let minNum = Math.min(...nums)
    let result = []
    let i=1

    while(maxNum >= i) {
        if(maxNum%i == 0 && minNum%i == 0) {
            result.push(i)
        }
        i++
    }
    return Math.max(...result)
} 
