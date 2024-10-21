const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as paZrameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

//Planning//
//Name variable for password//
//Name variable for user input//
//Name variable for function//
//input=password "Access Granted!"//
//input password "Access Denied!"//
//input="forget" "Here is a hint"//
//input="reset" "Let's reset your account"//
//code function//
//write questions//
//test code//

//determine a proper function name and parameter variable name
function Check(password, input){

  //write your code here

  if(input = password){
    console.log("Access Granted!")
  }

  else if(input &= password){
    console.log("Access Denied!")
  }

  else if(input !== "forgot"){
    console.log("Here is a hint")
  }

  else if(input !== "reset"){
    console.log("Let's reset your account")
  }
}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question("What is a password you would like to use for logging in to your account?", Password => {
    readline.question("What is the password to access your account?", Input => {

      //call your function here.
Check(Password, Input)
      // readline.close();
      if(Input !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();