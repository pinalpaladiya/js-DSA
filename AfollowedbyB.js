function checkAfollowedByB(str){
    
    for(let i=0; i<str.length; i++){

        if(str[i] === 'a') {
            for(let j=i+1; j<= i+3 && j< str.length; j++)
            {
                if(str[j] === 'b')
                {
                    return true;
                }
        }
    }
}return false;
}

//pinalabhi   9