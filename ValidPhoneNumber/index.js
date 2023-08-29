function telephoneCheck(str) {
    var regex =  /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/ ;
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");


  /*
  
  ^  👉 Beginning:- Matches the beginnng of the string, or the beginning of a line if the multiline flag (m) is enabled.

  (1\s?) 👉 Capturing group #1. Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.

            1 👉 Character. Matches a "1" character (char code 49)
            \s 👉 Whitespace. Matches any whitespace character (spaces, tabs, line breaks).
            ? 👉 Quantifier. Match between 0 and 1 of the preceding token.
  
  
            ? 👉 Quantifier. Match between 0 and 1 of the preceding token.



            (\(\d{3}\)|\d{3}) 👉 Groups multiple tokens together and creates a capture group for extracting a substring or using a backrefernce

            \( Escaped Character 👉 Matches a "(" Character (char code 40).

            \d Digit 👉 Matches any digit character (0-9)

            {3} Quantifier. 👉 Match 3 of the preceding token.

            \) Escaped Character.👉 matches ")" character (char code 41).

            {3} Quantifier. 👉 Match 3 of the preceding token.

    
    [\s\-] 👉 Character set. Match any character in the set.
         \s 👉 Whitespace. Matches any whitespace character (space, tabs, line breaks).

         \- Escaped Character 👉 Matches a "-" character (char code 45)


    ? 👉 Quantifier. Match between 0 and 1 of the preceding token.

    \d 👉 Digit. Matchs any digit character (0-9)

    {3} 👉 Quantifier. Match 3 of the preceding token.


  [\s\-] 👉 Character set. Match any character in  the set.
        \s 👉 Whitespace. Matches any whitespace character (spaces, tabs, line Breaks).

        \s- 👉 Escaped Character. Matches a "-" character (char code 45)

     ? 👉 Quantifier. Match between 0 and 1 of the preceding token.

     \d Digit 👉 Matches any digit character (0-9)

     {4} Quantifier. 👉 Match 4 of the preceding token.

     $ End 👉. Matches the end of the string, or the end of a line if the multiline flag(m)  is enabled.
  
  */