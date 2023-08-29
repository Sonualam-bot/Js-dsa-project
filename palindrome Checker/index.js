function palindrome(str) {
    //step1. use a regular expression to remove extra unwanted character from it;
    // next convert the input to lowercase
    var re = /[^A-Za-z0-9]/g; 
    str. str.toLowerCase().replace(re, '');
    

    //step: 2 create a for loop
    var len = str.length;

    for(let i= 0; i < len / 2; i++){
        if(str[i] !== str[len - 1 - i]){
            return false
        }
    }
    return true
  }
  
  palindrome("eye");