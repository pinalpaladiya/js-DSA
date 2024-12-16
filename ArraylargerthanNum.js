// function that return array elements larger than a number.

let arr = [2,3,4,5,6,1,7,8,9,10];
let num = 5;

function getElements(arr,num) {

    for(let i=0; i<arr.length; i++) {

        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);