function rot13(str) {
    let solved = ""
    for(let i=0; i < str.length; i++){
      const asciiValue = str[i].charCodeAt();
      if(asciiValue >= 65 && asciiValue <= 77){
        solved += String.fromCharCode(asciiValue + 13)
      }else if(asciiValue >= 78 && asciiValue <= 90){
        solved += String.fromCharCode(asciiValue - 13)
      }else{
        solved += str[i]
      }
    }
  
    return solved;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("A"));

  /*  
  
  step 1 : first i needed to find out the character code of the input according to ascii standards and string.charCodeAt() is the method to that;
  
  https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html  visit here for the table


  step 2: secondly i need to check that if the character that is provided as an input falls at the range of the ascii value where uppercase letters are stored. to achieve this i used a for loop to loop through the strings and checked if the string provided lies in the of the uppercase ascii value ;
  if it does than i can go ahead and add 13 to it.
  but what if it doesn't for that i would subtract 13 from it;
  and inorder to retain the spaces i would finally pass it on. 

  references
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
  
  
  
  */