function isPalindrome(str){
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}