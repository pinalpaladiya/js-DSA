function setMin(A) {
    let min = Infinity;
    for(let i=0; i<A.length; i++) {
        if (A[i]<min){
            min=A[i];
    }
}
return min;
}

function setMax(A) {
    let max = -Infinity;
    for(let i=0; i<A.length; i++) {
        if(A[i]>max) {
            max=A[i];
        }
    }
    return max;
}

function main () {
    const A = [4,5,6,7,8,9,2,3];
    console.log("min ele : " +setMin(A));
    console.log("max ele : " +setMax(A));
}
main();