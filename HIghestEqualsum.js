arr = [1,4,7,8,3];
function isHighestEqualToSum(arr){
    const maxElement = Math.max(...arr);

    sum =0;
for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
}

if(sum == maxElement){
    return true;
}
   // const sumOfAllElements = arr.reduce((acc,num) => 
    // acc + num, 0);

    // return maxElement === (sumOfAllElements - maxElement);
}

