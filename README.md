# password-generator-01

##The purpose of this was to create a function that would generate a password using a criteria of designated upper case, lower case, numbers, and symbols. 

  #This was done by first prompting the user to select the number of characters in the password. The prompt will not let the user select less than 8 or more than 128. This is done with an if/else statement. 
  
  #A query selector of an id html element is selected and a variable is put in place. 
  
  #Prompt variables are made that record the informational criteria of the password. 
  
  #Case, symbols, and number key-code arrays are created to store the minimum and maximum values. 
  
    -Concatenation is used in the SymbolsListArray to incorporate all distinct symbols
    
  #Function arrayFromLowToHigh stores all the low and high values of the array, a const variable of an     empty array is created. 
  
    -A forloop is created to go through all the numbers within the low and high array numbers. Then the     loop is appended into the array empty string variable
   
   #Function generatePassword takes all the information from the prompts and checks for either       true/false in a conditional concat variable named keyCombination. 
   
    -A Const variable named passwordCombination is an empty array variable is made to loop the character amount. 
    
    -A Const variable named passwordType is made and is set to equal the keyCombination variable which is then multiplied by a randomly selected number and the length of the keyCombination variable. 
    
    -The passwordCombination empty variable is appended as a string with the fromCharCode method making it the passwordType variable. 
