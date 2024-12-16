function checkCharacter(char){
    const lowerChar = char.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    if(char.length === 1 && /[a-zA-Z]/.test(char)){
        if(vowels.includes(lowerChar)) {
        console.log("vowel");
    }else{
        console.log("consonant");
    }
}else{
        console.log("invalid input");
    }
}
checkCharacter('A');
checkCharacter('m');
checkCharacter('3');